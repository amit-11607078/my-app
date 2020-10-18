import React from "react";
import "./App.css";
import arraydata from "./Api";
import Report1 from "./Report1";

function App() {
  return (
    <div className="App">
      {arraydata.map((count, i) => (
        <Report1 className="report1" key={i} data={count} />
      ))}
    </div>
  );
}

export default App;
