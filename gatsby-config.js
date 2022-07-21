require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

console.log(process.env.FIREBASE_API_KEY)

module.exports = {
  siteMetadata: {
    title: `Gatsby Demo Firebase Authentication`,
  },
  plugins: [`gatsby-plugin-react-helmet`],
};
