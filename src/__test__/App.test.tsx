import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Select from "react-select";
import userEvent from "@testing-library/user-event";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

test("debe abrir el menú de selección con fireEvent click", () => {
  const { container, queryByText, getByText } = render(
    <Select options={options} classNamePrefix="select" />
  );

  const control = container.querySelector(".select__dropdown-indicator");
  userEvent.click(control!);
  // userEvent
  screen.debug();
  expect(getByText("Chocolate")).toBeTruthy();
  expect(getByText("Strawberry")).toBeTruthy();
  expect(getByText("Vanilla")).toBeTruthy();
});
