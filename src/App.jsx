import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import './styles/estilos.css';
import './styles/Layout.css';

// Componente principal que maneja el enrutamiento de la aplicación
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout actúa como plantilla base para todas las rutas */}
        <Route path="/" element={<Layout />}>
          {/* Rutas principales de la aplicación */}
          <Route index element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contacto" element={<Contact />} />
          {/* Ruta de fallback para URLs no encontradas */}
          <Route path="*" element={<div>404: Página no encontrada</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;