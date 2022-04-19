import React from "react"

import Banner from "../components/Banner"
import Text from "../components/Text"
import Footer from "../components/Footer"

const componentsDict = {
  Banner: Banner,
  Text: Text,
  Footer: Footer,
}

type componentTypeString = 'Banner'| 'Text' | 'Footer'

const IndexTemplate = ({pageContext}: any) => {
  console.log(pageContext);
  
  const {title, description, components} = pageContext
  console.log(components);
  
  return(
    <div>
      <div>title {title}</div>
      <div>description {description}</div>
      <>
        {components.map(({componentType, props}: {componentType: componentTypeString, props: any}) => {
          const Component = componentsDict[componentType]
          
          return (
            <Component {...props} key={props.key}/>
          )
        })}
      </>
    </div>
  )
}

export default IndexTemplate
