import { Link, Outlet } from 'react-router-dom';

// Componente que define la estructura común para todas las páginas
const Layout = () => {
  return (
    <div className="layout">
      {/* Barra de navegación superior */}
      <nav className="navbar">
        <div className="navbar-contenido">
          {/* Logo/título del sitio */}
          <Link to="/" className="navbar-logo">
            Portfolio: Camila Urenda
          </Link>
          
          {/* Enlaces de navegación principal */}
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

      {/* Contenedor principal donde se renderiza el contenido de cada ruta */}
      <main className="contenido-principal">
        <Outlet />
      </main>

      {/* Pie de página */}
      <footer className="footer">
        <div className="footer-contenido">
          <p>© {new Date().getFullYear()} TechLabs. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;