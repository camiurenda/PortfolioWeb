import { useState } from 'react';

const Contact = () => {
  const [enviando, setEnviando] = useState(false);
  const [mensaje, setMensaje] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);

    try {
      const formData = new FormData(e.target);
      const response = await fetch('https://formspree.io/f/myzyjobb', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json'
        }
      });

      if (response.ok) {
        setMensaje({ tipo: 'exito', texto: '¡Mensaje enviado!' });
        e.target.reset();
      } else {
        throw new Error('Error al enviar');
      }
    } catch (error) {
      setMensaje({ tipo: 'error', texto: 'Error al enviar. Intenta nuevamente.' });
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div className="contacto-contenedor">
      <h1>Contacto</h1>
      <div className="contacto-contenido">
        <div className="contacto-info">
          <h2>Información de Contacto</h2>
          <div className="contacto-detalles">
            <div className="contacto-item">
              <span className="contacto-label">Email:</span>
              <a href="mailto:urendacamila@gmail.com">urendacamila@gmail.com</a>
            </div>
            <div className="contacto-item">
              <span className="contacto-label">LinkedIn:</span>
              <a href="https://www.linkedin.com/in/camila-urenda-77363a137/" target="_blank" rel="noopener noreferrer">
                Linkedin: Camila Urenda
              </a>
            </div>
            <div className="contacto-item">
              <span className="contacto-label">GitHub:</span>
              <a href="https://github.com/camiurenda" target="_blank" rel="noopener noreferrer">
                /camiurenda
              </a>
            </div>
          </div>
        </div>

        <form className="contacto-formulario" onSubmit={handleSubmit}>
          <div className="formulario-grupo">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              required
              placeholder="Tu nombre"
            />
          </div>

          <div className="formulario-grupo">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="tu@email.com"
            />
          </div>

          <div className="formulario-grupo">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea
              id="mensaje"
              name="mensaje"
              required
              placeholder="Tu mensaje..."
              rows="5"
            />
          </div>

          {mensaje && (
            <div className={`mensaje-${mensaje.tipo}`}>
              {mensaje.texto}
            </div>
          )}

          <button 
            type="submit" 
            className="boton-enviar"
            disabled={enviando}
          >
            {enviando ? 'Enviando...' : 'Enviar Mensaje'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;