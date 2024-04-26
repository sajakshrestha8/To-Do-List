import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: ["Do code", "Study on time", "Go to Sleep"],
      inputFieldText: "",

      text: [],

      newcontent: ["Don,t play game", "Don't eat junk food"],
    };
  }

  render() {
    return (
      <>
        <section className="Header">
          <h1>To Do List</h1>
        </section>

        <section className="input-wrapper">
          <h2>Task</h2>
          <input
            className="input-field"
            // onChange={(e) => {
            //   this.setState({
            //     inputFieldText: e.target.value,
            //   });
            // }}

            onChange={(e) => {
              this.setState({
                inputFieldText: e.target.value,
              });
            }}
            placeholder="Say something.."
          ></input>
          <br />
          <button
            className="add"
            onClick={() => {
              this.setState({
                text: [...this.state.text, this.state.inputFieldText], // ["Hello", "hi", "something"]
              });
            }}
          >
            Add
          </button>
        </section>

        <section className="output-wrapper">
          <ul>
            {this.state.list.map((ele, idx) => {
              return (
                <>
                  <li key={idx}>{ele}</li>
                  <button
                    onClick={() => {
                      this.setState({});
                    }}
                  >
                    Delete
                  </button>
                </>
              );
            })}

            {this.state.text.map((ele, id) => {
              return (
                <>
                  <li key={id}>{ele}</li>
                </>
              );
            })}
          </ul>
        </section>
      </>
    );
  }
}

export default App;
