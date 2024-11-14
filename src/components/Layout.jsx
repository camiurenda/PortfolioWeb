import { Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Layout = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [esMobile, setEsMobile] = useState(window.innerWidth <= 768);

  // Manejador para el cambio de tamaño de ventana
  useEffect(() => {
    const manejarCambioTamaño = () => {
      setEsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setMenuAbierto(false);
      }
    };

    window.addEventListener('resize', manejarCambioTamaño);
    return () => window.removeEventListener('resize', manejarCambioTamaño);
  }, []);

  // Cerrar menú al hacer clic en un enlace
  const cerrarMenu = () => {
    if (esMobile) {
      setMenuAbierto(false);
    }
  };

  return (
    <div className="layout">
      <nav className="navbar">
        <div className="navbar-contenido">
          <Link to="/" className="navbar-logo">
            Portfolio: Camila Urenda
          </Link>
          
          {/* Botón hamburguesa para mobile */}
          {esMobile && (
            <button 
              className={`menu-boton ${menuAbierto ? 'abierto' : ''}`}
              onClick={() => setMenuAbierto(!menuAbierto)}
              aria-label="Menú de navegación"
            >
              <span className="hamburguesa-linea"></span>
              <span className="hamburguesa-linea"></span>
              <span className="hamburguesa-linea"></span>
            </button>
          )}

          {/* Enlaces de navegación con clase condicional para mobile */}
          <div className={`navbar-links ${esMobile ? (menuAbierto ? 'abierto' : 'cerrado') : ''}`}>
            <Link to="/" className="navbar-link" onClick={cerrarMenu}>
              Inicio
            </Link>
            <Link to="/portfolio" className="navbar-link" onClick={cerrarMenu}>
              Portfolio
            </Link>
            <Link to="/contacto" className="navbar-link" onClick={cerrarMenu}>
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