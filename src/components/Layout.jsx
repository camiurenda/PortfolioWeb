import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="layout">
      <nav className="navbar">
        <div className="navbar-contenido">
          <Link to="/" className="navbar-logo">
            Portfolio: Camila Urenda
          </Link>
          
          <div className="navbar-links">
            <Link to="/" className="navbar-link">
              Inicio
            </Link>
            <Link to="/portfolio" className="navbar-link">
              Portfolio
            </Link>
            <Link to="/contacto" className="navbar-link">
              Contacto
            </Link>
          </div>
        </div>
      </nav>

      <main className="contenido-principal">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="footer-contenido">
          <p>© {new Date().getFullYear()} TechLabs. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;