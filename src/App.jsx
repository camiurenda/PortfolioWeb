import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import './styles/estilos.css';
import './styles/layout.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contacto" element={<Contact />} />
          <Route path="*" element={<div>404: Página no encontrada</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;