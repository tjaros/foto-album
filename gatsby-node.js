/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query GetPhotographers {
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
      }
    }
  `);
  data.strapi.photographers.forEach(photographer => {
    console.log(`name: ${photographer.name}, slug:${photographer.slug}`);
    actions.createPage({
      path: `/photographer/${photographer.slug}/`,
      component: require.resolve(`./src/pages/photographer.tsx`),
      context: photographer
    });
  });
};
