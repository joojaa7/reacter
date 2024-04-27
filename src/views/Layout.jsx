import {Outlet} from 'react-router-dom';
import SiteNavigation from '../components/SiteNavigation';

const Layout = () => (
  <div>
    <header>
      <SiteNavigation />
    </header>
    <main>
      <Outlet />
    </main>
    <footer className="m-12 text-xl">Copyright 2024</footer>
  </div>
);

export default Layout;
