import React from "react"
import Row from "./row"
import userEvent from "@testing-library/user-event";

export default class Greeting extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef();
    this.state = {
      name: "Mary",
    }
  }

  componentDidMount() {
    console.log("mount")
    const node = this.myRef.current;
    const input = node.querySelector("input")
    input.select();
    input.value = ""
    // debugger
    userEvent.type(input, "Harry", {delay:100});
  }

  render() {
    return (
      <section ref={this.myRef}>
        <Row label="Name">
          <input value={this.state.name} />
        </Row>
      </section>
    )
  }
}
