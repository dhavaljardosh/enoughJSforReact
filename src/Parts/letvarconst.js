import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [test, setTest] = useState(0);

  const example = () => {
    var singleData = 0;
    for (let j = 0; j < 10; j++) {
      let singleData = 20;
    }
    setTest(singleData);
  };

  // Execute only on Start
  // Only Once
  useEffect(() => {
    example();
  }, []);

  return <h1>{test}</h1>;
}

export default App;
