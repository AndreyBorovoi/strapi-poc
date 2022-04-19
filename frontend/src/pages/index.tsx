import React from "react"
import { graphql } from 'gatsby'

const IndexPage = ({ data }: any) => {
  console.log(data);
  
  return (
    <>
      <div>rate is {data.strapiRate.Rate}</div>
      <div>obj is {JSON.stringify(data.strapiObject.json)}</div>
    </>
  )
}

export default IndexPage

export const pageQuery = graphql`  
  query IndexQuery {
    strapiRate {
      Rate
    }
    strapiObject {
      json {
        list
        name
      }
    }
  }
`
