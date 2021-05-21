import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import { Checkbox } from "../Checkbox";

afterEach(cleanup);

it("CheckboxWithLabel changes the text after click", () => {
  const { queryByLabelText, getByLabelText, debug } = render(
    <Checkbox labelOn="On" labelOff="Off" />
  );

  // debug();
  expect(queryByLabelText(/off/i)).toBeInTheDocument();

  fireEvent.click(getByLabelText(/off/i));

  expect(queryByLabelText(/on/i)).toBeTruthy();
});
