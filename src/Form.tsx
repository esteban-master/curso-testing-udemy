import React, { FormEvent, FormEventHandler, useState } from "react";

export const Form = () => {
  const [errors, setErrors] = useState({ name: "", size: "" });
  const [name, setName] = useState("");

  function submit(e: any) {
    e.preventDefault();
    if (!name) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "El nombre es requerido",
      }));
    }
  }
  function handleBlur() {
    if (!name) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "El nombre es requerido",
      }));
    }
  }

  return (
    <div>
      <h1>Formulario</h1>
      <form onSubmit={submit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            name="name"
            onChange={(e) => {
              setName(e.target.value);
              if (name.length > 1)
                setErrors((prevErrors) => ({
                  ...prevErrors,
                  name: "",
                }));
            }}
            onBlur={handleBlur}
            id="name"
            value={name}
            type="text"
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="size">Size:</label>
          <input name="size" id="size" type="text" placeholder="Tu size" />
          {errors.size && <p>{errors.size}</p>}
        </div>
        <div>
          <label htmlFor="type">type:</label>
          <select name="type" id="type">
            <option value="apple">Apple</option>
            <option value="sony">Sony</option>
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
