import { resolve } from "path";

// import Banner from "./src/components/Banner"


// функции create нужны для подготовки пропсов
const createBanner = (node: any) =>{
  //хотелось так, но возникает баг
  // return(
  //   <Banner />
  // )
  return {
    // Так тоже не работает
    // Component: Banner, 
    componentType: 'Banner', 
    props: {
      key: 'Banner',
      img: node.Image,
    }
  }
}

const createText = (node: any) =>{
  // const converter = new Converter();
  // const html = converter.makeHtml(node.Text.Text.data.Text)

  
  // console.log(html);
  // Чтобы начать новый параграф, нужна 1 пустая строка
  const html: string = node.Text.Text.data.childMarkdownRemark.html
  
  return {
    componentType: 'Text', 
    props: {
      text: html,
      key: 'Text',
    }
  }
}

const createFooter= (node: any) =>{
  return {
    componentType: 'Footer', 
    props: {
      ligal: node.Ligal.Text.data.Text,
      key: 'Footer',
    }
  }
}

const creaters: object = {
  Banner: createBanner,
  Text: createText,
  Footer: createFooter,
}

const createComponentsList = (sequence: string[], node: any) =>{
  const list: any[] = []
  for (let index = 0; index < sequence.length; index++) {
    const creator = creaters[sequence[index]];
    list.push(creator(node))
  }

  return list
}


export const createAdminPages = (createPage: Function, pages: any[]) => {
  
  pages.forEach((page) => {
    // console.log(page);
    // console.log(page.node.Text);
    // console.log(page.node.Ligal);
    // console.log(page.node.SequenceOfComponents.strapi_json_value);
    const Sequence = page.node.SequenceOfComponents.strapi_json_value
    
    console.log(`Генерируется для ${page.node.Project}`);
    
    createPage({
      path: `/${page.node.Name}`,
      component: resolve('./src/templates/indexTemplate.tsx'),
      context: {
        title: page.node.Title,
        description: page.node.Description,
        components: createComponentsList(Sequence, page.node),
      },
    });
  });
}
