import React from "react"
import { GatsbyImage, getImage, IGatsbyImageData, withArtDirection } from "gatsby-plugin-image"

const Img = ({imgData}: any) => {
  console.log('asdas', imgData);
  
  const images = withArtDirection(
    getImage(imgData.LargeImg.localFile.childImageSharp.gatsbyImageData) as IGatsbyImageData, 
    [
      {
        media: "(max-width: 1279px)",
        image: getImage(imgData.DeskImg.localFile.childImageSharp.gatsbyImageData) as IGatsbyImageData,
      },
      {
        media: "(max-width: 959px)",
        image: getImage(imgData.TabImg.localFile.childImageSharp.gatsbyImageData) as IGatsbyImageData,
      },
      {
        media: "(max-width: 599px)",
        image: getImage(imgData.MobImg.localFile.childImageSharp.gatsbyImageData) as IGatsbyImageData,
      },
      
    ]
  )

  return <GatsbyImage image={images} alt={"alt"} />
} 

const Banner = ({img}: any) => {
  console.log(img);
  
  return(
    <div>
      <h1>Banner</h1>
      <Img imgData={img}/>
    </div>
  )
}

export default Banner
