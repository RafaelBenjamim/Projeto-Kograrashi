import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import PageTransition from '../components/pageTransition';

// 1. IMPORTAÇÃO DOS 24 PROJETOS (Verifique se a extensão no seu PC é .jpg, .jpeg ou .png)
import Proj1 from '../assets/Projeto01.jpeg';
import Proj2 from '../assets/Projeto02.jpeg';
import Proj3 from '../assets/Projeto03.jpeg';
import Proj4 from '../assets/Projeto04.jpeg';
import Proj5 from '../assets/Projeto05.jpeg'; 
import Proj6 from '../assets/Projeto06.jpeg';
import Proj7 from '../assets/Projeto07.jpeg';
import Proj8 from '../assets/Projeto08.jpeg';
import Proj9 from '../assets/Projeto09.jpeg';
import Proj10 from '../assets/Projeto10.jpeg';
import Proj11 from '../assets/Projeto11.jpeg';
import Proj12 from '../assets/Projeto12.jpeg';
import Proj13 from '../assets/Projeto13.jpeg';
import Proj14 from '../assets/Projeto14.jpeg';
import Proj15 from '../assets/Projeto15.jpeg';
import Proj16 from '../assets/Projeto16.jpeg';
import Proj17 from '../assets/Projeto17.jpeg';
import Proj18 from '../assets/Projeto18.jpeg';
import Proj19 from '../assets/Projeto19.jpeg';
import Proj20 from '../assets/Projeto20.jpeg';
import Proj21 from '../assets/Projeto21.jpeg';
import Proj22 from '../assets/Projeto22.jpeg';
import Proj23 from '../assets/Projeto23.jpeg';
import Proj24 from '../assets/Projeto24.jpeg';

interface Project {
  id: number;
  title: string;
  style: string;
  img: string;
  description?: string;
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => { if (e.key === 'Escape') setSelectedProject(null); };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => { document.body.style.overflow = selectedProject ? 'hidden' : 'auto'; }, [selectedProject]);

  // Array com os 24 projetos mapeados
  const availableProjects: Project[] = [
    { id: 1, title: "Projeto 01", style: "Disponível", img: Proj1, description: "Projeto autoral disponível para tatuar." },
    { id: 2, title: "Projeto 02", style: "Disponível", img: Proj2, description: "Projeto autoral disponível para tatuar." },
    { id: 3, title: "Projeto 03", style: "Disponível", img: Proj3, description: "Projeto autoral disponível para tatuar." },
    { id: 4, title: "Projeto 04", style: "Disponível", img: Proj4, description: "Projeto autoral disponível para tatuar." },
    { id: 5, title: "Projeto 05", style: "Disponível", img: Proj5, description: "Projeto autoral disponível para tatuar." },
    { id: 6, title: "Projeto 06", style: "Disponível", img: Proj6, description: "Projeto autoral disponível para tatuar." },
    { id: 7, title: "Projeto 07", style: "Disponível", img: Proj7, description: "Projeto autoral disponível para tatuar." },
    { id: 8, title: "Projeto 08", style: "Disponível", img: Proj8, description: "Projeto autoral disponível para tatuar." },
    { id: 9, title: "Projeto 09", style: "Disponível", img: Proj9, description: "Projeto autoral disponível para tatuar." },
    { id: 10, title: "Projeto 10", style: "Disponível", img: Proj10, description: "Projeto autoral disponível para tatuar." },
    { id: 11, title: "Projeto 11", style: "Disponível", img: Proj11, description: "Projeto autoral disponível para tatuar." },
    { id: 12, title: "Projeto 12", style: "Disponível", img: Proj12, description: "Projeto autoral disponível para tatuar." },
    { id: 13, title: "Projeto 13", style: "Disponível", img: Proj13, description: "Projeto autoral disponível para tatuar." },
    { id: 14, title: "Projeto 14", style: "Disponível", img: Proj14, description: "Projeto autoral disponível para tatuar." },
    { id: 15, title: "Projeto 15", style: "Disponível", img: Proj15, description: "Projeto autoral disponível para tatuar." },
    { id: 16, title: "Projeto 16", style: "Disponível", img: Proj16, description: "Projeto autoral disponível para tatuar." },
    { id: 17, title: "Projeto 17", style: "Disponível", img: Proj17, description: "Projeto autoral disponível para tatuar." },
    { id: 18, title: "Projeto 18", style: "Disponível", img: Proj18, description: "Projeto autoral disponível para tatuar." },
    { id: 19, title: "Projeto 19", style: "Disponível", img: Proj19, description: "Projeto autoral disponível para tatuar." },
    { id: 20, title: "Projeto 20", style: "Disponível", img: Proj20, description: "Projeto autoral disponível para tatuar." },
    { id: 21, title: "Projeto 21", style: "Disponível", img: Proj21, description: "Projeto autoral disponível para tatuar." },
    { id: 22, title: "Projeto 22", style: "Disponível", img: Proj22, description: "Projeto autoral disponível para tatuar." },
    { id: 23, title: "Projeto 23", style: "Disponível", img: Proj23, description: "Projeto autoral disponível para tatuar." },
    { id: 24, title: "Projeto 24", style: "Disponível", img: Proj24, description: "Projeto autoral disponível para tatuar." },
  ];

  return (
    <PageTransition className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-[1600px] mx-auto">
      
      <div className="mb-16">
        <h2 className="text-4xl md:text-6xl font-serif text-neutral-100 mb-4">Projetos Disponíveis</h2>
        <p className="text-neutral-400 max-w-md text-sm leading-relaxed">
          Desenhos exclusivos prontos para irem para a pele. Cada arte é tatuada apenas uma vez.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
        {availableProjects.map((project) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="group cursor-pointer relative aspect-[4/5] bg-neutral-900 overflow-hidden"
          >
            <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4 md:p-8">
              <span className="text-neutral-400 text-[10px] md:text-xs tracking-widest uppercase mb-1 md:mb-2">{project.style}</span>
              <span className="text-white text-sm md:text-xl font-serif">{project.title}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 bg-black/95 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <button className="absolute top-6 right-6 text-neutral-500 hover:text-white transition-colors z-50"><X size={32} strokeWidth={1} /></button>
            <motion.div
              initial={{ scale: 0.98, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.98, opacity: 0, y: 20 }} transition={{ type: "spring", damping: 30 }}
              className="relative w-full max-w-6xl max-h-[90vh] flex flex-col md:flex-row bg-[#080808] border border-neutral-900 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full md:w-2/3 h-[50vh] md:h-[85vh] bg-black relative">
                <img src={selectedProject.img} className="w-full h-full object-contain p-4 md:p-8" alt={selectedProject.title} />
              </div>
              <div className="w-full md:w-1/3 p-8 flex flex-col justify-center">
                <span className="text-neutral-500 text-xs tracking-[0.2em] uppercase mb-4">{selectedProject.style}</span>
                <h3 className="text-3xl font-serif text-neutral-100 mb-6">{selectedProject.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-8">{selectedProject.description}</p>
                <a 
                 href={`https://wa.me/5534984200447?text=Olá! Tenho interesse em reservar o projeto: ${selectedProject.title}.`}
                 target="_blank" 
                 rel="noreferrer"
                 className="mt-auto w-full py-4 border border-white bg-white text-black hover:bg-transparent hover:text-white transition-all tracking-widest text-xs uppercase font-bold text-center block"
                 >
                  Reservar via WhatsApp
              </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}