import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Rola para o topo suavemente
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });

    // 2. SEO: Altera o título da aba do navegador dinamicamente
    const titulos: Record<string, string> = {
      '/': 'Kogarashi Studio | Tatuagem Neo Japanese em Uberlândia',
      '/projetos': 'Projetos Disponíveis | Kogarashi Studio',
      '/artista': 'O Artista | Kogarashi Studio',
      '/contato': 'Agendamento & Local | Kogarashi Studio'
    };

    // Aplica o título correspondente à rota atual
    document.title = titulos[pathname] || 'Kogarashi Studio';
    
  }, [pathname]);

  return null;
}