import { render, screen } from "@testing-library/react";
import React from "react";
import { createMemoryHistory } from "history";
import { MemoryRouter } from "react-router-dom";

import "@testing-library/jest-dom";

import App from "../../App";

describe("Full app navigation", () => {
  it(`Navbar always rendered`, async () => {
    const history = createMemoryHistory();

    render(
      <MemoryRouter history={history}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole("banner", { name: /navigation bar/i })
    ).toBeInTheDocument();

    history.push("/cart");

    expect(
      screen.getByRole("banner", { name: /navigation bar/i })
    ).toBeInTheDocument();

    history.push("/catalog");

    expect(
      screen.getByRole("banner", { name: /navigation bar/i })
    ).toBeInTheDocument();
  });

  it(`Home section renders by default`, async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole("main", { name: /home section/i })
    ).toBeInTheDocument();
  });

  it(`Url path /catalog renders catalog page`, async () => {
    render(
      <MemoryRouter initialEntries={["/catalog"]}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole("main", { name: /catalog section/i })
    ).toBeInTheDocument();
  });

  it(`Url path /cart renders cart page`, async () => {
    render(
      <MemoryRouter initialEntries={["/cart"]}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole("main", { name: /cart section/i })
    ).toBeInTheDocument();
  });
});
