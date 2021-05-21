import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { Hola } from "../Hola";

test("Render Hola", () => {
  const { debug, getByRole } = render(<Hola />);
  // debug();
  const role = getByRole("button");
  expect(getByRole("heading")).toHaveTextContent("Hola");
  expect(getByRole("heading")).toBeInTheDocument();
  expect(role).toBeInTheDocument();
});
test("Render Boton Click 2 veces", () => {
  const { debug, getByText } = render(<Hola />);
  const button = getByText(/click/i, { selector: "button" });

  fireEvent.click(button);
  fireEvent.click(button);

  // debug();
  const result = getByText(/click: 3/i, { selector: "p" });

  expect(result).toBeInTheDocument();
});
