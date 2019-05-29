import React from "react";
import Header from "./Header";

class Help extends React.Component {
  componentDidMount() {
    document.title = "Help | What to do?";
  }

  render() {
    return (
      <div className="container">
        <Header tagline="Your questions will be answered here." />
        <dl>
          <dt>where is the data stored?</dt>
          <dt>We store all information in your browser's local storage.</dt>
        </dl>
      </div>
    );
  }
}

export default Help;
