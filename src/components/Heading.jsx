import React from "react"

const hoge = {
  a: "a",
  b: "b"
}

const fuga = Object.keys(hoge).includes("a")

const Heading = (props) => (
  <h1>{ fuga && props.text }</h1>
)

export default Heading
