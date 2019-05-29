import React from "react";
import Header from "./Header";

class NotFaund extends React.Component {
  componentDidMount() {
    document.title = "error 404 | What to do?";
  }
  render() {
    return (
      <div className="container">
        <Header tagline="404 -  Page not found!" />
        <div className="alert alert-warning">
          <strong>
            Ooops .... sorry!
            <br />
          </strong>
          The requested page could not be found.
        </div>
      </div>
    );
  }
}
export default NotFaund;
