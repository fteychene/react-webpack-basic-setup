import React from "react"
import { render } from "react-dom"

import Hello from "components/Hello"

render(
  <Hello name="foo" />,
  document.querySelector("#mountNode")
)
