const axios = require("axios");
const crypto = require("crypto");
const path = require("path");

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions;

  // fetch raw data from the randomuser api
  const fetchRandomUser = () =>
    axios.get(`https://randomuser.me/api/?results=500`);
  // await for results
  const res = await fetchRandomUser();

  // map into these results and create nodes
  res.data.results.map((user, i) => {
    // Create your node object
    const userNode = {
      // Required fields
      id: `${i}`,
      parent: `__SOURCE__`,
      internal: {
        type: `RandomUser`, // name of the graphQL query --> allRandomUser {}
        // contentDigest will be added just after
        // but it is required
      },
      children: [],

      // Other fields that you want to query with graphQl
      gender: user.gender,
      name: {
        title: user.name.title,
        first: user.name.first,
        last: user.name.last,
      },
      picture: {
        large: user.picture.large,
        medium: user.picture.medium,
        thumbnail: user.picture.thumbnail,
      },
      location: {
        street: {
          number: user.location.street.number,
          name: user.location.street.name,
        },
        city: user.location.city,
        state: user.location.state,
        country: user.location.country,
      },

      // etc...
    };

    // Get content digest of node. (Required field)
    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(userNode))
      .digest(`hex`);
    // add it to userNode
    userNode.internal.contentDigest = contentDigest;

    // Create node with the gatsby createNode() API
    createNode(userNode);
  });

  return;
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query RandomUserQuery {
      allRandomUser {
        edges {
          node {
            id
            name {
              last
            }
          }
        }
      }
    }
  `);

  result.data.allRandomUser.edges.forEach(({ node }) => {
    createPage({
      path: `/product/${node.name.last}`,
      component: require.resolve(`./src/pages/product/[last].js`),
      context: { last: node.name.last },
    });
  });

  // const compareResult = await graphql(`
  //   query RandomUserQuery {
  //     allRandomUser {
  //       edges {
  //         node {
  //           id
  //         }
  //       }
  //     }
  //   }
  // `);
  // compareResult.data.allRandomUser.edges.forEach(({ node }) => {
  //   createPage({
  //     path: `/compare/${node.id}`,
  //     component: require.resolve("./src/pages/compare/index.js"),
  //     context: {
  //       id: node.id,
  //     },
  //   });
  // });
};
