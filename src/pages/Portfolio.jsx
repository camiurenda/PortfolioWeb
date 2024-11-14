import { useEffect, useState } from 'react';
import { useGithub } from '../hooks/useGithub';
import { configurarToken } from '../services/github.services';
import ReactMarkdown from 'react-markdown';

const Portfolio = () => {
  const nombreUsuario = 'camiurenda';
  const [readmeExpandido, setReadmeExpandido] = useState({});
  
  useEffect(() => {
    const token = import.meta.env.VITE_GITHUB_TOKEN;
    if (token) {
      configurarToken(token);
    }
  }, []);

  const { repositorios, cargando, error } = useGithub(nombreUsuario);

  const toggleReadme = (repoId) => {
    setReadmeExpandido(prev => ({
      ...prev,
      [repoId]: !prev[repoId]
    }));
  };

  if (error) {
    return (
      <div className="contenedor">
        <header className="encabezado">
          <h1 className="titulo">Mi Portfolio de GitHub</h1>
        </header>
        <main className="principal">
          <div className="error">Error: {error}</div>
        </main>
      </div>
    );
  }

  return (
    <div className="contenedor">
      <header className="encabezado">
        <h1 className="titulo">Mi Portfolio de GitHub</h1>
      </header>
      
      <main className="principal">
        {cargando ? (
          <div className="cargando">
            <div className="spinner" />
          </div>
        ) : (
          <div className="grid-repositorios">
            {repositorios.map(repo => (
              <article key={repo.id} className="tarjeta">
                <div className="tarjeta-encabezado">
                  <h2 className="tarjeta-titulo">
                    <a href={repo.url} target="_blank" rel="noopener noreferrer">
                      {repo.nombre}
                    </a>
                    {repo.privado && <span className="etiqueta-privado">Privado</span>}
                  </h2>
                </div>

                <div className="tarjeta-estadisticas">
                  {repo.tecnologiaPrincipal && (
                    <span className="tarjeta-tecnologia">
                      {repo.tecnologiaPrincipal}
                    </span>
                  )}
                  <span title="Estrellas">⭐ {repo.estrellas}</span>
                  <span title="Forks">🍴 {repo.forks}</span>
                  {repo.urlDespliegue && (
                    <a 
                      href={repo.urlDespliegue}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tarjeta-despliegue"
                      title="Ver despliegue"
                    >
                      🚀 Demo
                    </a>
                  )}
                </div>

                {repo.readme && (
                  <div className="tarjeta-readme">
                    <div className={`readme-contenido ${readmeExpandido[repo.id] ? 'expandido' : ''}`}>
                      <ReactMarkdown>{repo.readme}</ReactMarkdown>
                    </div>
                    <button
                      className="boton-readme"
                      onClick={() => toggleReadme(repo.id)}
                    >
                      {readmeExpandido[repo.id] ? 'Ver menos' : 'Ver más'}
                    </button>
                  </div>
                )}
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Portfolio;