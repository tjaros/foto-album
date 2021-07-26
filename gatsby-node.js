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

// TODO: temporary workaround for https://github.com/gatsbyjs/gatsby/issues/31878
exports.onCreateWebpackConfig = ({
  actions,
  plugins,
  stage,
  getConfig
}) => {
  // override config only during production JS & CSS build
  if (stage === 'build-javascript') {
    // get current webpack config
    const config = getConfig()

    const options = {
      minimizerOptions: {
        preset: [
          `default`,
          {
            svgo: {
              full: true,
              plugins: [
                `minifyStyles`,
                `moveElemsAttrsToGroup`,
                `moveGroupAttrsToElems`,
                `prefixIds`,
                `reusePaths`,
                `sortAttrs`,
              ],
            },
          },
        ],
      }
    }
    // find CSS minimizer
    const minifyCssIndex = config.optimization.minimizer.findIndex(
      minimizer => minimizer.constructor.name ===
        'CssMinimizerPlugin'
    )
    // if found, overwrite existing CSS minimizer with the new one
    if (minifyCssIndex > -1) {
      config.optimization.minimizer[minifyCssIndex] =
        plugins.minifyCss(options)
    }
    // replace webpack config with the modified object
    actions.replaceWebpackConfig(config)
  }
};
