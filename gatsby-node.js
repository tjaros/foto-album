/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

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
          bio
          socials {
            type
            url
          }
        }
      }
    }
  `);
  console.log('Generating /model/ pages');
  data.strapi.models.forEach(model => {
    console.log(`name: ${model.name}, s ug:${model.slug}`);
    actions.createPage({
      path: `/model/${model.slug}/`,
      component: require.resolve(`./src/templates/model.tsx`),
      context: model
    });
  });

  console.log('Generating /photographer/ pages');
  data.strapi.photographers.forEach(photographer => {
    console.log(`name: ${photographer.name}, slug:${photographer.slug}`);
    actions.createPage({
      path: `/photographer/${photographer.slug}/`,
      component: require.resolve(`./src/templates/photographer.tsx`),
      context: photographer
    });
  });
};
