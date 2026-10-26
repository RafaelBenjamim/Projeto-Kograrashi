import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Footer from './components/footer';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Artist from './pages/Artist';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

// COMPONENTE HEADER GLOBAL
function GlobalHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* HEADER DESKTOP COM EFEITO FROSTED GLASS (Desfoque) */}
      <header className="fixed top-0 w-full p-6 md:px-12 md:py-8 flex justify-between items-center z-50 bg-[#050505]/90 backdrop-blur-md border-b border-neutral-900 text-white transition-all">
        <Link to="/" className="text-lg tracking-[0.2em] font-serif uppercase">Kogarashi</Link>
        
        <nav className="hidden md:flex gap-8 text-xs tracking-widest uppercase">
          <Link to="/projetos" className="hover:text-neutral-400 transition-colors">Projetos Disponíveis</Link>
          <Link to="/artista" className="hover:text-neutral-400 transition-colors">O Artista</Link>
          <Link to="/contato" className="hover:text-neutral-400 transition-colors">Contato</Link>
        </nav>

        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(true)}>
          <Menu size={24} strokeWidth={1} />
        </button>
      </header>

      {/* OVERLAY DO MENU MOBILE */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[60] bg-[#050505] flex flex-col items-center justify-center p-6"
          >
            <button className="absolute top-6 right-6 text-neutral-500 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>
              <X size={32} strokeWidth={1} />
            </button>
            <nav className="flex flex-col gap-12 text-center text-xl tracking-[0.2em] uppercase font-serif">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              <Link to="/projetos" onClick={() => setIsMobileMenuOpen(false)}>Projetos Disponíveis</Link>
              <Link to="/artista" onClick={() => setIsMobileMenuOpen(false)}>O Artista</Link>
              <Link to="/contato" onClick={() => setIsMobileMenuOpen(false)}>Contato</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/projetos" element={<Projects />} />
        <Route path="/artista" element={<Artist />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop /> {/* <-- Vigia de scroll adicionado aqui! */}
      <div className="bg-[#050505] min-h-screen text-neutral-300 font-sans selection:bg-neutral-800 selection:text-white flex flex-col">
        <GlobalHeader />
        
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}