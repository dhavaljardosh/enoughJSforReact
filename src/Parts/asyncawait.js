import React, { useEffect, useState } from "react";
import "./App.css";

// function App() {
//   return <h1>Arrow Function Component</h1>;
// }

const App = () => {
  let [employees, setEmployees] = useState([]);

  // Where we're getting the Data
  useEffect(() => {
    const getEmployees = async () => {
      //Fetch from API
      let result = await fetch(
        "http://dummy.restapiexample.com/api/v1/employees"
      );
      let fetchedResult = await result.json();
      console.log(fetchedResult.data);
      setEmployees(fetchedResult.data);
    };
    getEmployees();
  }, []);

  return (
    <div>
      {employees.map((employee, index) => {
        return (
          <div
            style={{ border: "2px solid blue", marginBottom: 10, padding: 10 }}
            key={index}
          >
            <div>
              Name - <b>{employee.employee_name}</b>
            </div>
            <div>
              Salary - <b>{employee.employee_salary}</b>
            </div>
            <div>
              Age - <b>{employee.employee_age}</b>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
