import React from "react"
import { render } from "react-dom"

import Hello from "components/Hello"

render(
  <div>
    <Hello name="Foo" />
    <Hello name="Bar" prefix="Oh hey ! I'm" />
  </div>,
  document.querySelector("#mountNode")
)
