import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useEffect } from 'react';
import { logEvent } from '../lib/firebase';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  useEffect(() => {
    logEvent('page_view', { page_path: pathname, page_title: document.title });
  }, [pathname]);

  return null;
}

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
