import axios from 'axios';

const clienteGithub = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    'Accept': 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28'
  }
});

export const configurarToken = (token) => {
  if (token) {
    clienteGithub.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete clienteGithub.defaults.headers.common['Authorization'];
  }
};

export const githubServicio = {
  async obtenerUsuario(nombreUsuario) {
    try {
      const { data } = await clienteGithub.get(`/users/${nombreUsuario}`);
      return {
        avatar_url: data.avatar_url,
        name: data.name,
        bio: data.bio,
        location: data.location,
        blog: data.blog,
        twitter_username: data.twitter_username,
        public_repos: data.public_repos,
        followers: data.followers,
        following: data.following
      };
    } catch (error) {
      console.error('Error al obtener datos del usuario:', error);
      throw error;
    }
  },

  async obtenerRepositorios(nombreUsuario) {
    try {
      const { data } = await clienteGithub.get(`/users/${nombreUsuario}/repos`, {
        params: {
          sort: 'updated',
          direction: 'desc'
        }
      });

      const repositorios = await Promise.all(
        data.map(async (repo) => {
          let readme = null;
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

          return {
            id: repo.id,
            nombre: repo.name,
            descripcion: repo.description,
            url: repo.html_url,
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