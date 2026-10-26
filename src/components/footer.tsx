import { Link } from 'react-router-dom';
import { Camera } from 'lucide-react'; // Usando Camera para evitar o erro do seu VS Code

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-neutral-900 pt-24 pb-8 px-6 md:px-12 text-neutral-500">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
        
        {/* Coluna da Marca */}
        <div className="md:col-span-5">
          <h4 className="text-xl font-serif text-neutral-100 uppercase tracking-[0.2em] mb-6">Kogarashi</h4>
          <p className="text-sm leading-relaxed max-w-sm">
            Estúdio autoral focado em Neo Japanese e Illustrative Tattoo. Transformando a anatomia através do contraste e da fluidez.
          </p>
        </div>

        {/* Coluna de Navegação */}
        <div className="md:col-span-3 md:col-start-8">
          <h5 className="text-xs uppercase tracking-widest text-neutral-100 mb-6">Navegação</h5>
          <ul className="space-y-4 text-xs tracking-widest uppercase">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/projetos" className="hover:text-white transition-colors">Projetos Disponíveis</Link></li>
            <li><Link to="/artista" className="hover:text-white transition-colors">O Artista</Link></li>
            <li><Link to="/contato" className="hover:text-white transition-colors">Contato</Link></li>
          </ul>
        </div>

        {/* Coluna de Redes */}
        <div className="md:col-span-2">
          <h5 className="text-xs uppercase tracking-widest text-neutral-100 mb-6">Conecte-se</h5>
          <ul className="space-y-4 text-xs tracking-widest uppercase">
            <li>
              <a href="https://instagram.com/kogarashi.hi" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white transition-colors">
                <Camera size={16} /> Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Linha de Copyright */}
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] tracking-widest uppercase border-t border-neutral-900 pt-8">
        <p>&copy; {new Date().getFullYear()} Kogarashi Studio.</p>
        <p className="mt-4 md:mt-0">Uberlândia, Minas Gerais</p>
      </div>
    </footer>
  );
}