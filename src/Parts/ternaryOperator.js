import React from "react";
import "./App.css";

const isOnline = true;

function App() {
  return <h1>{isOnline ? "Online" : "Offline"}</h1>;
}

export default App;
