import React from "react"

const Hello = ({ prefix, name }) => (
  <div>
    <h1>{prefix} {name}</h1>
    <p>This is a React component with a prefix {prefix} and a parameter {name}</p>
  </div>
)

Hello.defaultProps = {
  prefix: 'Hello,'
}

export default Hello
