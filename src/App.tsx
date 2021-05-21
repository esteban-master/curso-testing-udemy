import React from "react";
import "./App.css";
import { Form } from "./Form";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

function App() {
  return (
    <div className="App">
      <h1>Hola Esteban</h1>
      <Form />
      <Select options={options} classNamePrefix="select" />

      <div
        onMouseDown={() => console.log("MouseDown")}
        onPointerDown={() => console.log("PointerDown")}
        onPointerUp={() => console.log("PointerUp")}
        onClick={() => console.log("Click")}
      >
        hola
      </div>
    </div>
  );
}

export default App;
