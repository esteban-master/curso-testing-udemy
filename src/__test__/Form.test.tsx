import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Form } from "../Form";

describe("Formulario component", () => {
  beforeEach(() => render(<Form />));

  test("Esta el titulo", () => {
    expect(screen.queryByText(/Formulario/i)).toBeInTheDocument();
  });

  test("Existen inputs", () => {
    // screen.debug();
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/size/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/type/i)).toBeInTheDocument();

    expect(
      screen.getByText(/apple/i, { selector: "option" })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/sony/i, { selector: "option" })
    ).toBeInTheDocument();
  });

  test("Existe boton de submit", () => {
    expect(screen.getByRole("button", { name: /submit/i }));
  });

  test("Mensaje de error al hacer clik en submit sin name", () => {
    expect(
      screen.queryByText(/El nombre es requerido/i)
    ).not.toBeInTheDocument();
    userEvent.click(screen.getByRole("button", { name: /submit/i }));
    expect(
      screen.queryByText(/El nombre es requerido/i, { selector: "p" })
    ).toBeInTheDocument();
  });
  test("Escribir en input name", () => {
    const inputName = screen.getByLabelText(/name/i);
    userEvent.type(inputName, "42 sapo qlo");
    expect(inputName).toHaveValue("42 sapo qlo");

    // El evento clear elimina cualquier texto de un input o textarea
    userEvent.clear(inputName);
    userEvent.click(screen.getByRole("button", { name: /submit/i }));

    expect(
      screen.queryByText(/El nombre es requerido/i, { selector: "p" })
    ).toBeInTheDocument();
  });
  test("Validar nombre con Blur", () => {
    const inputName = screen.getByLabelText(/name/i);
    inputName.focus();
    inputName.blur();
    expect(
      screen.queryByText(/El nombre es requerido/i, { selector: "p" })
    ).toBeInTheDocument();

    userEvent.type(inputName, "Hola");
    expect(
      screen.queryByText(/El nombre es requerido/i, { selector: "p" })
    ).not.toBeInTheDocument();
    expect(inputName).toHaveValue("Hola");
    // screen.debug();
  });
});
