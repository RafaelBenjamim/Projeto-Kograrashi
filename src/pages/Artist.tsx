import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/pageTransition';

// 1. IMPORTAÇÃO DIRETA DAS IMAGENS DA PASTA ASSETS
import FotoPerfil from '../assets/Artista-perfil.jpg';
import FotoProcesso from '../assets/Artista-perfil2.jpg';

export default function Artist() {
  return (
    <PageTransition className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-[1600px] mx-auto">
      
      {/* INTRODUÇÃO EDITORIAL */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center mb-32">
        <div className="md:col-span-5 order-2 md:order-1">
          <motion.p 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-neutral-500 text-xs tracking-[0.3em] uppercase mb-6"
          >
            A Mente Por Trás
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif text-neutral-100 mb-8 leading-tight"
          >
            12 anos de <br/><span className="italic text-neutral-500">evolução.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="text-neutral-400 text-sm leading-relaxed mb-8 max-w-md"
          >
            A tatuagem nunca foi apenas sobre pigmento na pele. É sobre entender a anatomia como uma tela em movimento. Com mais de uma década de agulha, o foco é entregar trabalhos que envelheçam com força e clareza.
          </motion.p>
        </div>

        {/* FOTO PRINCIPAL DO ARTISTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="md:col-span-7 order-1 md:order-2 aspect-[3/4] md:aspect-[4/3] bg-neutral-900 overflow-hidden"
        >
          {/* AQUI A IMAGEM É INSERIDA USANDO A VARIÁVEL FotoPerfil */}
          <img 
            src={FotoPerfil} 
            alt="Artista tatuando" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
          />
        </motion.div>
      </section>

      {/* SEÇÃO MULTIDISCIPLINAR (FOTOGRAFIA E ILUSTRAÇÃO) */}
      <section className="mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="aspect-square bg-neutral-900 overflow-hidden"
          >
            {/* AQUI A IMAGEM É INSERIDA USANDO A VARIÁVEL FotoProcesso */}
            <img 
              src={FotoProcesso} 
              alt="Ilustração de Referência" 
              className="w-full h-full object-cover opacity-80"
            />
          </motion.div>

          <div className="flex flex-col justify-center">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-3xl md:text-5xl font-serif text-neutral-100 mb-6"
            >
              Além da pele.
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="text-neutral-400 text-sm leading-relaxed mb-6 max-w-md"
            >
              A forte base em <strong>Ilustração</strong> e o olhar treinado pela <strong>Fotografia</strong> constroem o diferencial do Kogarashi Studio. 
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="text-neutral-400 text-sm leading-relaxed mb-12 max-w-md"
            >
              O peso do Neo Japanese encontra a liberdade criativa do Illustrative Tattoo. Cada projeto nasce no papel, considerando o contraste de luz e sombra antes mesmo do primeiro traço na pele.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
              <Link to="/projetos" className="inline-flex items-center gap-4 text-xs tracking-widest uppercase border-b border-neutral-700 pb-2 hover:border-neutral-300 transition-colors group">
                Ver Projetos Disponíveis <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
    </PageTransition>
  );
}