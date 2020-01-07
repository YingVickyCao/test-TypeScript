import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// TypeScript,start
import { hi } from "./example";
import { hiPerson, Person } from "./classes/People";
// TypeScript,end

export function test_on() {
  let p = new Person("Vanne", "Mimmie");
  let p_namme = hiPerson(p);
  console.log(p_namme);
}

export const test_off = () => {
  hi("TypeScript");
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

          <button className="App-link" onClick={this._onClick_4_TypeScript}>
            TypeScript
          </button>
        </header>
      </div>
    );
  }
  _onClick_4_TypeScript() {
    test_on();
    test_off();
  }
}
