import axios from 'axios';

// Cliente HTTP configurado para la API de GitHub
const clienteGithub = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    'Accept': 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28'
  }
});

// Configura el token de autenticación para las peticiones
export const configurarToken = (token) => {
  if (token) {
    clienteGithub.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete clienteGithub.defaults.headers.common['Authorization'];
  }
};

export const githubServicio = {
  // Obtiene información detallada de un usuario de GitHub
  async obtenerUsuario(nombreUsuario) {
    try {
      const { data } = await clienteGithub.get(`/users/${nombreUsuario}`);
      // Extrae y retorna solo los campos necesarios
      return {
        avatar_url: data.avatar_url,
        name: data.name,
        bio: data.bio,
        location: data.location,
        blog: data.blog,
        public_repos: data.public_repos,
        followers: data.followers,
        following: data.following
      };
    } catch (error) {
      console.error('Error al obtener datos del usuario:', error);
      throw error;
    }
  },

  // Obtiene y procesa los repositorios del usuario
  async obtenerRepositorios(nombreUsuario) {
    try {
      // Obtiene repositorios ordenados por última actualización
      const { data } = await clienteGithub.get(`/users/${nombreUsuario}/repos`, {
        params: {
          sort: 'updated',
          direction: 'desc'
        }
      });

      // Procesa cada repositorio para obtener información adicional
      const repositorios = await Promise.all(
        data.map(async (repo) => {
          let readme = null;
          let paginaDespliegue = null;

          // Intenta obtener el README del repositorio
          try {
            const readmeResponse = await clienteGithub.get(
              `/repos/${nombreUsuario}/${repo.name}/readme`,
              {
                headers: {
                  'Accept': 'application/vnd.github.raw+json'
                }
              }
            );
            readme = readmeResponse.data;
          } catch (error) {
            console.log(`No se encontró README para ${repo.name}`);
          }

          // Intenta obtener la URL de despliegue (GitHub Pages o homepage)
          try {
            const pagesResponse = await clienteGithub.get(
              `/repos/${nombreUsuario}/${repo.name}/pages`
            );
            paginaDespliegue = pagesResponse.data.html_url;
          } catch (error) {
            if (repo.homepage) {
              paginaDespliegue = repo.homepage;
            }
          }

          // Construye y retorna el objeto con la información procesada
          return {
            id: repo.id,
            nombre: repo.name,
            descripcion: repo.description,
            url: repo.html_url,
            urlDespliegue: paginaDespliegue,
            tecnologiaPrincipal: repo.language,
            estrellas: repo.stargazers_count,
            forks: repo.forks_count,
            actualizado: new Date(repo.updated_at).toLocaleDateString(),
            privado: repo.private,
            readme: readme
          };
        })
      );

      return repositorios;
    } catch (error) {
      console.error('Error al obtener repositorios:', error);
      throw error;
    }
  }
};