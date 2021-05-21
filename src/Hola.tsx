import React, { useState } from "react";

export const Hola = () => {
  const [num, setNum] = useState(1);
  return (
    <div>
      <h1>Hola</h1>
      <p>Jajajajaja</p>
      <form>
        <input type="text" />
      </form>
      <button onClick={() => setNum(num + 1)}>Click</button>
      <p>Click: {num}</p>
    </div>
  );
};
