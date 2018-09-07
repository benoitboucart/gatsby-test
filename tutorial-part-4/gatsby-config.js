module.exports = {
  siteMetadata: {
    title: `Hello Devine 🌺`,
  },
  plugins: [
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