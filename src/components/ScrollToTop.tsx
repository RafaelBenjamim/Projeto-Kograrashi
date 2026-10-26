import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Sempre que a rota (pathname) mudar, rola suavemente para o topo
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Usamos 'instant' para não brigar com a animação do Framer Motion
    });
  }, [pathname]);

  return null;
}