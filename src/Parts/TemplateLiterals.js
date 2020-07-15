import React from "react";
import "./App.css";

const username = "EduRise";

function App() {
  const userName = () => {
    return "Hello " + username;
  };

  // const userName = () => {
  //   return `Hello ${username}, Template Literal`;
  // };
  return <h1>{userName()}</h1>;
}

export default App;
