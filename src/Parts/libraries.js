import React, { useEffect } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  useEffect(() => {
    const getEmployees = async () => {
      let result = await Axios.get(
        "http://dummy.restapiexample.com/api/v1/employees"
      );
      console.log(result.data.data);
    };
    getEmployees();
  }, []);
  return <h1>Library in React</h1>;
}

export default App;
