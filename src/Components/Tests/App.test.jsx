import { render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";

import "@testing-library/jest-dom";

import App from "../../App";

test(`Full app rendering/navigating`, async () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  expect(
    screen.getByRole("main", { name: /home section/i })
  ).toBeInTheDocument();

  render(
    <MemoryRouter initialEntries={["/catalog"]}>
      <App />
    </MemoryRouter>
  );
  expect(
    screen.getByRole("main", { name: /catalog section/i })
  ).toBeInTheDocument();

  render(
    <MemoryRouter initialEntries={["/cart"]}>
      <App />
    </MemoryRouter>
  );
  expect(
    screen.getByRole("main", { name: /cart section/i })
  ).toBeInTheDocument();
});
