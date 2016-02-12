import React from "react"

const Hello = ({ name }) => (
  <h1>{name}</h1>
)

Hello.defaultProps = {
  name: "World"
}

export default Hello
