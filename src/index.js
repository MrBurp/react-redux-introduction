import React from "react";
import { render } from "react-dom";
import Header from "./components/Header";

// class Header extends React.Component {
//   render() {
//     return <h1>What to do?</h1>;
//   }
// }

render(<Header />, document.querySelector("#main"));
