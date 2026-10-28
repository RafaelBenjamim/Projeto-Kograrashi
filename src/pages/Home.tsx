import { motion } from 'framer-motion';
import { ArrowRight, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/pageTransition';

// 1. IMPORTAÇÃO DAS 6 IMAGENS DA HOME
import HeroImg from '../assets/hero3.jpg';
import Detalhe1 from '../assets/Detalhe1.jpg';
import Detalhe2 from '../assets/Detalhe2.jpg';
import Portfolio1 from '../assets/Portfolio1.jpg';
import Portfolio2 from '../assets/Portfolio2.jpg';
import Portfolio3 from '../assets/Portfolio3.jpg';

export default function Home() {
  return (
    <PageTransition>
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={HeroImg} 
            alt="Kogarashi Studio Background" 
            className="w-full h-full object-cover opacity-40 scale-105 animate-pulse-slow"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/30 via-transparent to-[#050505]" />
        </div>

        {/* TEXTO VERTICAL JAPONÊS (KOGARASHI) - ESTILO EDITORIAL */}
        <div 
          className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 hidden md:block opacity-[0.05] pointer-events-none select-none z-0"
          style={{ writingMode: 'vertical-rl' }}
        >
          <span className="text-white text-8xl lg:text-[10rem] font-serif tracking-[0.3em]">
            木枯らし
          </span>
        </div>

        <div className="relative z-10 flex flex-col items-center text-center px-6 mt-20">
          {/* TOQUE DO CARIMBO HANKO (VERMELHO ESCURO) */}
          <motion.span 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} 
            className="text-[#8B2323] font-bold text-xs tracking-[0.3em] uppercase mb-6"
          >
            Uberlândia — MG
          </motion.span>
          
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-6xl md:text-8xl lg:text-9xl font-serif text-white mb-8 tracking-tighter">
            Kogarashi <br />
            <span className="italic font-light text-neutral-400">Studio</span>
          </motion.h1>
          
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }}>
            <Link to="/projetos" className="group flex items-center gap-4 text-xs tracking-widest uppercase text-white border-b border-neutral-700 pb-2 hover:border-white transition-all">
              Projetos Disponíveis <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SEÇÃO SOBRE / MANIFESTO */}
      <section className="py-16 px-6 md:px-12 max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <h2 className="text-4xl md:text-5xl font-serif text-neutral-100 mb-8 leading-tight">Arte em <span className="italic text-neutral-500">cada detalhe.</span></h2>
          <p className="text-neutral-400 text-sm leading-relaxed mb-6 max-w-md">
            Especializado em Neo Japanese e Illustrative Tattoo, o Kogarashi Studio foca em criar projetos únicos e atemporais, respeitando a fluidez da anatomia do corpo.
          </p>
          <Link to="/artista" className="inline-block mt-4 text-xs tracking-widest uppercase border border-neutral-800 px-6 py-3 hover:bg-white hover:text-black transition-all">
            Conheça o Artista
          </Link>
        </motion.div>
        <div className="grid grid-cols-2 gap-4 h-[600px]">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-neutral-900 mt-12 overflow-hidden">
            <img src={Detalhe1} alt="Processo de tatuagem" className="w-full h-full object-cover grayscale opacity-80" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="bg-neutral-900 mb-12 overflow-hidden">
            <img src={Detalhe2} alt="Detalhe do trabalho" className="w-full h-full object-cover grayscale opacity-80" />
          </motion.div>
        </div>
      </section>

      {/* SEÇÃO PORTFÓLIO RESUMIDO */}
      <section className="py-16  px-6 md:px-12 max-w-[1600px] mx-auto border-t border-neutral-900">
        <div className="flex justify-between items-end mb-16">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-serif text-neutral-100">
            Obras Recentes
          </motion.h2>
          <a href="https://instagram.com/kogarashi.hi" target="_blank" rel="noreferrer" className="hidden md:flex items-center gap-3 text-xs tracking-widest uppercase hover:text-white transition-colors text-neutral-400">
            <Camera size={16} /> Ver mais no Instagram
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { id: 1, img: Portfolio1, title: "Neo Japanese" },
            { id: 2, img: Portfolio2, title: "Illustrative" },
            { id: 3, img: Portfolio3, title: "Blackwork" }
          ].map((item, i) => (
            <motion.div key={item.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }} className="group relative aspect-[3/4] bg-neutral-900 overflow-hidden cursor-pointer">
              <img src={item.img} alt={`Portfólio ${item.id}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <span className="text-white text-lg font-serif tracking-wide">{item.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}