import { useState, useEffect } from 'react';
import { githubServicio } from '../services/github.services';

const Home = () => {
  const [seccionActiva, setSeccionActiva] = useState('experiencia');
  const [avatarUrl, setAvatarUrl] = useState('');
  const nombreUsuario = 'camiurenda';

  useEffect(() => {
    const cargarAvatar = async () => {
      try {
        const datosUsuario = await githubServicio.obtenerUsuario(nombreUsuario);
        setAvatarUrl(datosUsuario.avatar_url);
      } catch (error) {
        console.error('Error al cargar el avatar:', error);
      }
    };

    cargarAvatar();
  }, []);

  const datosCV = {
    perfil: {
      nombre: "Camila Urenda",
      titulos: [
        {
          emoji: "🌐",
          texto: "GeneXus analyst Jr."
        },
        {
          emoji: "🎓",
          texto: "Estudiante de Analista en Sistemas"
        },
        {
          emoji: "⚛️",
          texto: "Desarrollador Jr. Full Stack MERN"
        },
        {
          emoji: "🍕",
          texto: "Ingeniera en alimentos"
        },
        {
          emoji: "💻",
          texto: "Técnica en reparación y mantenimiento de PC/Notebook"
        },
      ],
      descripcion: "Programadora junior en constante formación profesional, entusiasta de los desafíos y orientada a la resolución de problemas, en búsqueda de su primera experiencia laboral con stack MERN en el mundo IT.",
    },
    experiencia: [
      {
        id: 1,
        puesto: "Desarrolladora Genexus",
        empresa: "Softech",
        periodo: "2023 - Presente",
        logros: [
          {
            emoji: "🔄",
            texto: "Migración de ERP desktop a versión web utilizando Genexus 18"
          },
          {
            emoji: "📊",
            texto: "Desarrollo e implementación de reportes empresariales con Crystal Reports"
          },
          {
            emoji: "🔐",
            texto: "Gestión de autenticación y autorización mediante GAM (Genexus Access Manager)"
          },
          {
            emoji: "🎨",
            texto: "Implementación de interfaces modernas y responsivas usando WorkWithPlus"
          },
          {
            emoji: "🖥️",
            texto: "Implementación del 1er sistema de asistencia al equipo de soporte potenciado por IA"
          },//comentario
          {
            emoji: "🤝",
            texto: "Destacada asistencia y capacitación sobre el ERP a clientes."
          }
        ]
      },
      {
        id: 2,
        puesto: "Estudiante de doctorado en ciencias agroalimentarias",
        empresa: "CONICET - UNVM",
        periodo: "2020 - 2023",
        logros: [
          {
            emoji: "⚗️",
            texto: "Beca doctoral de CONICET en química orgánica, productos naturales."
          },
          {
            emoji: "⚛️",
            texto: "Temática: Resverastrol en tegumento de maní."
          },
        ]
      },
    ],
    educacion: [
      {
        id: 1,
        titulo: "Analista en Sistemas",
        institucion: "Instituto Leibnitz",
        periodo: "2022 - 2024",
        logros: [
          {
            emoji: "💻",
            texto: "Especialización en desarrollo web y programación"
          },
          {
            emoji: "🏆",
            texto: "Proyecto final: Webscraping para carteleras de cine de CABA"
          },
          {
            emoji: "📚",
            texto: "Formación en metodologías ágiles y trabajo en equipo"
          }
        ]
      }
    ],
    habilidades: {
      tecnicas: [
        { emoji: "⚛️", nombre: "React.js: Básico" },
        { emoji: "🟢", nombre: "Node.js: Básico" },
        { emoji: "🌐", nombre: "JavaScript/TypeScript: Básico" },
        { emoji: "🎨", nombre: "HTML5/CSS3: Intermedio" },
        { emoji: "🗄️", nombre: "MongoDB: Básico" },
        { emoji: "📊", nombre: "Crystal Reports: Avanzado" },
        { emoji: "🔧", nombre: "Genexus 18: Intermedio" },
        { emoji: "🚀", nombre: "Despliegues en Vercel" },
        { emoji: "🖥️", nombre: "Despliegues y DB en Render" }
      ],
      blandas: [
        { emoji: "👥", nombre: "Trabajo en equipo" },
        { emoji: "🗣️", nombre: "Comunicación efectiva" },
        { emoji: "🧩", nombre: "Resolución de problemas" },
        { emoji: "📚", nombre: "Aprendizaje continuo" }
      ]
    }
  };

  const renderExperiencia = (experiencia) => (
    <div key={experiencia.id} className="cv-item">
      <h4>{experiencia.puesto}</h4>
      <h5>{experiencia.empresa}</h5>
      <p className="cv-periodo">{experiencia.periodo}</p>
      <ul className="cv-logros-lista">
        {experiencia.logros.map((logro, index) => (
          <li key={index} className="cv-logro-item">
            <span className="cv-logro-emoji">{logro.emoji}</span>
            <span className="cv-logro-texto">{logro.texto}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  const renderEducacion = (educacion) => (
    <div key={educacion.id} className="cv-item">
      <h4>{educacion.titulo}</h4>
      <h5>{educacion.institucion}</h5>
      <p className="cv-periodo">{educacion.periodo}</p>
      <ul className="cv-logros-lista">
        {educacion.logros.map((logro, index) => (
          <li key={index} className="cv-logro-item">
            <span className="cv-logro-emoji">{logro.emoji}</span>
            <span className="cv-logro-texto">{logro.texto}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="cv-contenedor">
      <header className="cv-encabezado">
        <div className="cv-perfil">
          {avatarUrl && (
            <div className="cv-avatar-container">
              <img 
                src={avatarUrl} 
                alt="Foto de perfil" 
                className="cv-avatar"
              />
            </div>
          )}
          <div className="cv-info-principal">
            <h1>{datosCV.perfil.nombre}</h1>
            <div className="cv-titulos">
              {datosCV.perfil.titulos.map((titulo, index) => (
                <div 
                  key={index} 
                  className="cv-titulo-badge"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="cv-titulo-emoji">{titulo.emoji}</span>
                  <span className="cv-titulo-texto">{titulo.texto}</span>
                </div>
              ))}
            </div>
            <p className="cv-descripcion">{datosCV.perfil.descripcion}</p>
          </div>
        </div>
      </header>

      <nav className="cv-navegacion">
        <button 
          className={`cv-nav-btn ${seccionActiva === 'experiencia' ? 'activo' : ''}`}
          onClick={() => setSeccionActiva('experiencia')}
        >
          <span>💼</span> Experiencia
        </button>
        <button 
          className={`cv-nav-btn ${seccionActiva === 'educacion' ? 'activo' : ''}`}
          onClick={() => setSeccionActiva('educacion')}
        >
          <span>🎓</span> Educación
        </button>
        <button 
          className={`cv-nav-btn ${seccionActiva === 'habilidades' ? 'activo' : ''}`}
          onClick={() => setSeccionActiva('habilidades')}
        >
          <span>🛠️</span> Habilidades
        </button>
      </nav>

      <div className="cv-contenido">
        {seccionActiva === 'experiencia' && (
          <section className="cv-seccion">
            <h3>
              <span className="seccion-emoji">💼</span>
              Experiencia Laboral
            </h3>
            {datosCV.experiencia.map(renderExperiencia)}
          </section>
        )}

        {seccionActiva === 'educacion' && (
          <section className="cv-seccion">
            <h3>
              <span className="seccion-emoji">🎓</span>
              Educación
            </h3>
            {datosCV.educacion.map(renderEducacion)}
          </section>
        )}

        {seccionActiva === 'habilidades' && (
          <section className="cv-seccion">
            <h3>
              <span className="seccion-emoji">🛠️</span>
              Habilidades
            </h3>
            <div className="cv-habilidades">
              <div className="habilidades-grupo">
                <h4>
                  <span className="seccion-emoji">💻</span>
                  Técnicas
                </h4>
                <ul className="habilidades-lista">
                  {datosCV.habilidades.tecnicas.map((hab) => (
                    <li key={hab.nombre} className="habilidad-item">
                      <span className="habilidad-emoji">{hab.emoji}</span>
                      <span className="habilidad-nombre">{hab.nombre}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="habilidades-grupo">
                <h4>
                  <span className="seccion-emoji">🤝</span>
                  Blandas
                </h4>
                <ul className="habilidades-lista">
                  {datosCV.habilidades.blandas.map((hab) => (
                    <li key={hab.nombre} className="habilidad-item">
                      <span className="habilidad-emoji">{hab.emoji}</span>
                      <span className="habilidad-nombre">{hab.nombre}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Home;