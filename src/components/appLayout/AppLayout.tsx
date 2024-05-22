import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import Header from '@components/header/index.js';
import Footer from '@components/footer/index.js';

function AppLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const { id } = useParams();

  useEffect(() => {
    let title = 'Blank';

    if (location.pathname === '/') {
      title = 'Home';
    } else if (location.pathname === '/favorites') {
      title = 'Favorites';
    } else if (location.pathname.startsWith('/')) {
      title = `Detail Info`;
    }

    document.title = title;
  }, [location, id]);

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default AppLayout;
