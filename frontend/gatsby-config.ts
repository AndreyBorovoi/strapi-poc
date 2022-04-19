import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `frontend`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-sass", 
    "gatsby-plugin-image", 
    "gatsby-plugin-react-helmet", 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: "http://localhost:1337",
        // в API Tokens надо создать токен
        accessToken: "efdfbe1865fa0fa01eceac702a8454e981efd83f0485275de79f04333fe3cd266af15445bbaf0c9b246edc13b1bb557a9036d08c650aef21a524bbe87bfa09acee41c8c2d37e1bbd1a9864491382f27e61093c604a734aa45e7c7025aed4ce26e55331b0b02f4cbc4c56a51daadb9a1e828f77fa71490bf8e54d4b24a33b9d4e",
        // в Roles надо дать доступ Public для поиска 
        collectionTypes: ["image", "ligal", "page", "text"],
        singleTypes: ["rate", "object"],
      },
    },
    "gatsby-transformer-remark",
  ]
};

export default config;
