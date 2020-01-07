import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// TypeScript,start
import { hi } from "./example";
import { hiPerson, Person } from "./classes/People";
import { hiStu, Stu } from "./interfaces/Student";
import { test_basic_types } from "./basic_types/test_basic_types";
// TypeScript,end

export function test_on() {
  test_basic_types();
}

export const test_off = () => {
  // Hello world Typescipt
  hi("TypeScript");

  // Interface
  let p = new Person("Vanne", "Mimmie");
  let p_namme = hiPerson(p);
  console.log(p_namme);

  // Class with ingerface
  let stu = {
    firstName: "Apple",
    lastName: "Com"
  };

  let result = hiStu(stu);
  console.log(result);
};

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// export default App;

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn TypeScript
          </a>

          <button className="App-btn" onClick={this._onClick_4_TypeScript}>
            test
          </button>
        </header>
      </div>
    );
  }
  _onClick_4_TypeScript() {
    test_on();
    // test_off();
  }
}
