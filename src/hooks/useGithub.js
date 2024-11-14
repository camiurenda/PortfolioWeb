import { useState, useEffect } from 'react';
import { githubServicio } from '../services/github.services';

// Hook personalizado para manejar la obtención y estado de los repositorios
export const useGithub = (nombreUsuario) => {
  // Estado para manejar repositorios, loading y errores
  const [estado, setEstado] = useState({
    repositorios: [],
    cargando: true,
    error: null
  });

  // Efecto para cargar los repositorios cuando cambia el usuario
  useEffect(() => {
    const cargarRepositorios = async () => {
      try {
        const datos = await githubServicio.obtenerRepositorios(nombreUsuario);
        setEstado({
          repositorios: datos,
          cargando: false,
          error: null
        });
      } catch (error) {
        setEstado({
          repositorios: [],
          cargando: false,
          error: 'Error al cargar repositorios'
        });
      }
    };

    cargarRepositorios();
  }, [nombreUsuario]);

  return estado;
};