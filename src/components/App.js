import React from "react";
import Header from "./Header";
import ToDoList from "./ToDoList";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header tagline="this could be our shopping list." />
        <ToDoList />
      </div>
    );
  }
}
export default App;
