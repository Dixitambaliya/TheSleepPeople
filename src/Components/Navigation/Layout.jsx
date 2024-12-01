import { Outlet } from 'react-router-dom';
import Navbar from './Navbar.jsx'; // Your Navbar component

const Layout = () => {
  return (
<>
      <Navbar />
      <main className="content">
        <Outlet />
      </main>
      </>
  );
};

export default Layout;
