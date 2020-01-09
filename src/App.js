import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// TypeScript,start
import { hi } from "./example";
import { hi2 } from "./example2";
import { test_class } from "./classes/people";
import { test_inheritance } from "./classes/inheritance";
import { test_modifiers_private } from "./classes/modifiers_private";
import { test_modifiers_private2 } from "./classes/modifiers_private2";
import { test_modifiers_protected } from "./classes/modifiers_ protected";
import { test_modifiers_protected2 } from "./classes/modifiers_ protected2";
import { test_modifier_Readonly } from "./classes/modifier_readonly";
import { hiStu, Stu } from "./interfaces/Student";
import { test_basic_types } from "./basic_types/test_basic_types";
import { test_setter_checks } from "./classes/accessors";
import { test_static_properties } from "./classes/static_properties";

// TypeScript,end

export function test_on() {
  // Hello world Typescipt
  hi("TypeScript");
  hi2("TypeScript");
}

export const test_off = () => {
  // START:Interface
  let stu = {
    firstName: "Apple",
    lastName: "Com"
  };
  let result = hiStu(stu);
  console.log(result);
  // END:START

  // START:Class
  // test_class();
  // test_inheritance();
  // test_modifiers_private();
  // test_modifiers_private2();
  // test_modifiers_protected();
  // test_modifiers_protected2();
  // test_modifier_Readonly();
  // test_setter_checks();
  // test_static_properties();
  // END:Class

  // START:Basic types
  test_basic_types();
  // END:Basic types
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
