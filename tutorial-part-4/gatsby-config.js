module.exports = {
  siteMetadata: {
    title: `Hello Devine 🌺`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Benoit",
        short_name: "Benoit",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        display: "minimal-ui",
        icon: "src/images/icon.png", // This path is relative to the root of the site.
      },
    },
    // The manifest plugin should be listed before the 
    // offline plugin so that the offline plugin can cache the created manifest.webmanifest
    'gatsby-plugin-offline',
    
    `gatsby-plugin-react-helmet`,
    
    `gatsby-plugin-emotion`,

    /** Markdown loader & transformer */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },

    `gatsby-transformer-remark`,

    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
};