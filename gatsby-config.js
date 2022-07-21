require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Gatsby Demo Firebase Authentication`,
  },
  plugins: [`gatsby-plugin-react-helmet`],
};
