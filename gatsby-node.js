/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const heading = name => {
  console.log();
  console.log(`\x1b[1mGenerating \x1b[36m\x1b[1m${name}\x1b[0m\x1b[1m pages:`);
  console.log('⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻');
};
const line = (name, slug) => {
  console.log(`\x1b[36m\x1b[1m${name}\x1b[0m: \x1b[2mhttp://localhost:8000${slug}\x1b[0m`);
};
const createAlbums = async (actions, graphql) => {
  const { data } = await graphql(`
    query EnumerateAlbums {
      strapi {
        albums {
          name
          slug
          id
        }
      }
    }
  `);

  heading('album');
  data.strapi.albums.forEach(album => {
    line(album.name, `/albums/\x1b[1m${album.slug}/`);
    actions.createPage({
      path: `/albums/${album.slug}/`,
      component: require.resolve('./src/templates/album.tsx'),
      context: album
    });
  });
};

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query AllPages {
      strapi {
        photographers {
          id
          name
          slug
          location
          bio
          published_at
          avatar {
            url
          }
          socials {
            type
            url
          }
        }

        models {
          id
          name
          slug
          avatar {
            url
          }
          location
          bustLine
          waistLine
          hipLine
          height
          hairColor
          eyeColor
          age
          bio
          socials {
            type
            url
          }
        }
      }
    }
  `);

  heading('model');

  data.strapi.models.forEach(model => {
    line(model.name, `/model/\x1b[1m${model.slug}/`);
    actions.createPage({
      path: `/model/${model.slug}/`,
      component: require.resolve(`./src/templates/model.tsx`),
      context: model
    });
  });
  heading('photographers');
  data.strapi.photographers.forEach(photographer => {
    line(photographer.name, `/photographer/\x1b[1m${photographer.slug}/`);
    actions.createPage({
      path: `/photographer/${photographer.slug}/`,
      component: require.resolve(`./src/templates/photographer.tsx`),
      context: photographer
    });
  });

  await createAlbums(actions, graphql);
};
