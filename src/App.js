import React from "react";
import "./App.css";

const isOnline = true;
const nested = false;

function App() {
  return (
    <h1>{isOnline ? (nested ? "Nestd True" : "Nested False") : "Offline"}</h1>
  );
}

export default App;
