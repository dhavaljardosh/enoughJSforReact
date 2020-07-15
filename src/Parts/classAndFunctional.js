import React from "react";
import "./App.css";

function App() {
  return <h1>Functional Component</h1>;
}

class App extends React.Component {
  render() {
    return <h1>This is a Class Component</h1>;
  }
}

export default App;
