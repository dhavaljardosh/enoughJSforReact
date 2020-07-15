import React from "react";
import "./App.css";

const App = () => {
  return (
    <UserObject
      details={{ name: "Dhaval", age: 28, jobTitle: "Software Engineer" }}
    />
  );
};

const UserObject = (props) => {
  return <h1>{JSON.stringify(props)}</h1>;
};

export default App;
