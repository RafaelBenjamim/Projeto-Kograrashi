import { motion } from 'framer-motion';
import { MapPin, Camera, ArrowUpRight, MessageCircle } from 'lucide-react';
import PageTransition from '../components/pageTransition';

import FotoEstudio from '../assets/estudio.jpeg';

export default function Contact() {
  return (
    <PageTransition className="min-h-screen pt-48 pb-24 px-6 md:px-12 max-w-[1600px] mx-auto flex flex-col justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
        
        {/* INFORMAÇÕES DE CONTATO E LOCALIZAÇÃO */}
        <div className="order-2 md:order-1">
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-neutral-500 text-xs tracking-[0.3em] uppercase mb-6"
          >
            Agendamentos & Local
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif text-neutral-100 mb-16 leading-tight"
          >
            Inicie seu <br/><span className="italic text-neutral-500">projeto.</span>
          </motion.h2>

          <div className="space-y-12">
            {/* Bloco de Endereço Principal (Estúdio Privado) */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="flex items-start gap-4 mb-4">
                <MapPin className="text-neutral-500 mt-1" size={20} strokeWidth={1.5} />
                <div>
                  <h3 className="text-lg font-serif text-neutral-200 mb-2">Studio Privado</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                    Atendimento exclusivo com hora marcada.<br />
                    Uberlândia, Minas Gerais
                  </p>
                  <p className="text-neutral-500 text-xs italic">
                    * O endereço completo é enviado após a confirmação do agendamento.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Bloco de Atendimentos Externos */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
              <h3 className="text-lg font-serif text-neutral-200 mb-2">Atendimentos Externos</h3>
              <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
                Agenda sazonal disponível para as cidades de <strong>Ribeirão Preto (SP)</strong> e <strong>Belo Horizonte (MG)</strong>, sujeita à disponibilidade. Acompanhe os anúncios oficiais.
              </p>
            </motion.div>

            {/* Canais Oficiais - WhatsApp e Instagram */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="pt-8 border-t border-neutral-900">
              <p className="text-neutral-500 text-xs tracking-widest uppercase mb-6">Canais Oficiais</p>
              
              {/* Card WhatsApp (Principal) */}
              <a 
                href="https://wa.me/5534984200447" 
                target="_blank" 
                rel="noreferrer"
                className="group flex items-center justify-between p-6 bg-white hover:bg-neutral-200 transition-colors border border-white mb-4"
              >
                <div className="flex items-center gap-4">
                  <MessageCircle className="text-black" size={24} strokeWidth={1.5} />
                  <div className="text-black">
                    <span className="block text-sm font-bold mb-1">WhatsApp Oficial</span>
                    <span className="block text-xs text-neutral-700">Fale diretamente com o estúdio</span>
                  </div>
                </div>
                <ArrowUpRight className="text-black transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={20} />
              </a>

              {/* Card Instagram (Secundário) */}
              <a 
                href="https://instagram.com/kogarashi.hi" 
                target="_blank" 
                rel="noreferrer"
                className="group flex items-center justify-between p-6 bg-neutral-900/50 hover:bg-neutral-800 transition-colors border border-neutral-800 hover:border-neutral-600"
              >
                <div className="flex items-center gap-4">
                  <Camera className="text-neutral-300" size={24} strokeWidth={1.5} />
                  <div>
                    <span className="block text-sm text-neutral-200 mb-1">@kogarashi.hi</span>
                    <span className="block text-xs text-neutral-500">Acompanhe os trabalhos</span>
                  </div>
                </div>
                <ArrowUpRight className="text-neutral-600 group-hover:text-white transition-colors" size={20} />
              </a>
            </motion.div>
          </div>
        </div>

        {/* IMAGEM AMBIENTAL / ESTÚDIO */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
          className="order-1 md:order-2 aspect-[4/5] md:aspect-square bg-neutral-900 overflow-hidden relative"
        >
          {/* AQUI A IMAGEM DO ESTÚDIO É INSERIDA */}
          <img 
            src={FotoEstudio} 
            alt="Ambiente do Estúdio" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-50" />
        </motion.div>

      </div>
    </PageTransition>
  );
}