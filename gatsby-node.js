const axios = require("axios");
const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const express = require("express");
const multer = require("multer");

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

  const compareResult = await graphql(`
    query RandomUserQuery {
      allRandomUser {
        edges {
          node {
            id
          }
        }
      }
    }
  `);
  compareResult.data.allRandomUser.edges.forEach(({ node }) => {
    createPage({
      path: `/compare/${node.id}`,
      component: require.resolve("./src/pages/compare/index.js"),
      context: {
        id: node.id,
      },
    });
  });
};

// const app = express();

// const upload = multer({
//   storage: multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, "static/webcam");
//     },
//     filename: (req, file, cb) => {
//       const filename = `webcam-${Date.now()}.jpg`;
//       cb(null, filename);
//     },
//   }),
// });

// app.post("/api/save-image", upload.single("image"), (req, res) => {
//   if (req.file) {
//     res.send(`/webcam/${req.file.filename}`);
//   } else {
//     res.status(400).send("Bad Request: No image found in request body");
//   }
// });
// app.use("/webcam", express.static(path.join(__dirname, "static/webcam")));

// module.exports = app;

exports.onCreateDevServer = ({ app }) => {
  app.post("/api/save-image", (req, res) => {
    const filename = req.query.filename;
    const filepath = path.join(__dirname, "static/webcam", filename);
    const data = req.body;
    const webcamRef = React.useRef(null);

    const imageSrc = webcamRef.current.getScreenshot();
    const buffer = Buffer.from(imageSrc, "base64");

    fs.writeFile(filepath, buffer, (err) => {
      if (err) {
        console.error("Error saving image:", err);
        res.status(500).send("Error saving image");
      } else {
        res.send("Image saved");
      }
    });
  });
};
