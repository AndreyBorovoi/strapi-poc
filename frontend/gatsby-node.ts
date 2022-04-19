import {createAdminPages} from "./createAdminPages";

export const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(
    `
      {
        pages: allStrapiPage {
          edges {
            node {
              Name
              Ligal {
                Text {
                  data {
                    Text
                  }
                }
              }
              Text {
                Text {
                  data {
                    childMarkdownRemark {
                      html
                    }
                  }
                }
              }
              Title
              Description
              SequenceOfComponents {
                id
                strapi_json_value
              }
              Project
              Image {
                DeskImg {
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
                LargeImg {
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
                MobImg {
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
                TabImg {
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }
  
  const pages = result.data.pages.edges
  createAdminPages(createPage, pages)
};
