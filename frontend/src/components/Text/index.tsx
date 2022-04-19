import React from "react"

const Text = ({text}: any) => {
  return(
    <div>
      <h1>TextBlock</h1>
      <div dangerouslySetInnerHTML={{__html: text}}/>
    </div>
  )
}

export default Text
