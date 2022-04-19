import { resolve } from "path";


export const createSeoPages = (createPage: Function, pages: any[]) => {
  pages.forEach((page, index) => {
    createPage({
      path: `/${page.node.name}`,
      component: resolve('./src/templates/seoTemplate.tsx'),
      context: {
        name: page.node.name,
      },
    });
  });
}