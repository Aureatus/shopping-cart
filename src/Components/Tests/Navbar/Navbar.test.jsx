import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import "@testing-library/jest-dom";

import App from "../../../App";
import userEvent from "@testing-library/user-event";

describe("Full app navigation using Navbar Links", () => {
  it("Loads catalog page upon clicking catalog link", async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    userEvent.click(screen.getByRole("link", { name: /catalog/i }));
    expect(
      screen.getByRole("main", { name: /catalog section/i })
    ).toBeInTheDocument();
  });

  it("Loads cart page upon clicking cart link", async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    userEvent.click(screen.getByRole("link", { name: /cart/i }));
    expect(
      screen.getByRole("main", { name: /cart section/i })
    ).toBeInTheDocument();
  });

  it("Loads home page upon clicking home link", async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    userEvent.click(screen.getByRole("link", { name: /home/i }));
    expect(
      screen.getByRole("main", { name: /home section/i })
    ).toBeInTheDocument();
  });
});
