import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import "@testing-library/jest-dom";

import App from "../../../App";
import userEvent from "@testing-library/user-event";

test(`Full app navigation using Navbar Links`, async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  userEvent.click(screen.getByRole("link", { name: /catalog/i }));
  expect(
    screen.getByRole("main", { name: /catalog section/i })
  ).toBeInTheDocument();

  userEvent.click(screen.getByRole("link", { name: /cart/i }));
  expect(
    screen.getByRole("main", { name: /cart section/i })
  ).toBeInTheDocument();

  userEvent.click(screen.getByRole("link", { name: /home/i }));
  expect(
    screen.getByRole("main", { name: /home section/i })
  ).toBeInTheDocument();
});
