import React, { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  let [users, setUsers] = useState([
    { name: "Dhaval", city: "Austin", age: 28 },
    { name: "Rakesh", city: "Atlanta", age: 25 },
    { name: "Nilanj", city: "Derol", age: 27 },
    { name: "Sohel", city: "Surat", age: 29 },
    { name: "Het", city: "Derol", age: 20 },
  ]);

  // return <h1>{users.reduce((acc, curr) => acc + curr.age, 0)}</h1>;

  // return (
  //   <div>
  //     {users
  //       .filter((user) => user.city === "Derol")
  //       .map((user) => (
  //         <p>
  //           {user.name} - {user.age} - {user.city}
  //         </p>
  //       ))}
  //   </div>
  // );

  // return (
  //   <div>
  //     {users.map((user) => {
  //       return (
  //         <p>
  //           {user.name} - {user.age} - {user.city}
  //         </p>
  //       );
  //     })}
  //   </div>
  // );
}

export default App;
