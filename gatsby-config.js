
module.exports = {
  siteMetadata: {
    // title: `Atelier Delalande Tabourin | Architecture + Material LAB + Design`,
    title: `Atelier Delalande Tabourin`,
    description: `L'Atelier Delalande Tabourin est un cabinet d'architecture, un Material LAB et un bureau de Design.`,
    author: `@arnaudambro`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-json`,
    {
      resolve: 'gatsby-plugin-htaccess',
      options: {
        RewriteBase: '/',
        https: true,
        www: true
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-transformer-excel`,
      options: {
        raw: false,
        defval: null,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `atelier-delalande-tabourin-v2`,
        short_name: `adt-v2`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`, //https://developers.google.com/web/fundamentals/web-app-manifest/#display
        icon: `src/images/adt-icon.png`, // This path is relative to the root of the site.
        legacy: true // for previous ios versions
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
