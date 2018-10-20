module.exports = {
  siteMetadata: {
    title: 'Quite Nifty',
    slogan: 'Nifty products. Quite well made.',
    siteUrl: 'https://www.quitenifty.com'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/data`,
        name: 'json-data'
      }
    },
    'gatsby-transformer-json',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-svg'
  ]
};
