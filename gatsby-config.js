module.exports = {
  siteMetadata: {
    title: 'Quite Nifty',
    slogan: 'Nifty products. Quite well made.'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
        name: 'json-data'
      }
    },
    'gatsby-transformer-json',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    }
  ]
};
