import { render, screen } from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";
import App from "../../../App";
import "@testing-library/jest-dom";

describe("Homepage renders correctly", () => {
  it("Welcome text is typed out", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    const welcomeText = await screen.findByText(
      /welcome to my mock e-commerce website\./i
    );
    expect(welcomeText).toBeInTheDocument();
  });
});
