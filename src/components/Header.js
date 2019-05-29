import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        {/* an example to comment in react */}
        <h1>What to do?</h1>
        <span className="tagline">This could be our bucket list</span>
      </header>
    );
  }
}

export default Header;
