import { useState, useEffect } from 'react';
import { githubServicio } from '../services/github.services';

export const useGithub = (nombreUsuario) => {
  const [estado, setEstado] = useState({
    repositorios: [],
    cargando: true,
    error: null
  });

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