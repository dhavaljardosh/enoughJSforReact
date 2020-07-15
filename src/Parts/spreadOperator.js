import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  let [colors, setColors] = useState(["red", "green", "blue"]);

  useEffect(() => {
    const addColor = () => {
      let newColorList = [...colors, "white"];
      setColors(newColorList);
    };
    setTimeout(() => {
      addColor();
    }, 2000);
  }, []);

  return (
    <div>
      {colors.map((color) => (
        <p>{color}</p>
      ))}
    </div>
  );
}

export default App;
