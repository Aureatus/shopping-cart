import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import App from "../../../App";
import userEvent from "@testing-library/user-event";

beforeEach(() => {
  const data = [
    {
      id: 1,
      title: "test",
      image: "",
      price: 13,
      amount: "1",
      added: "false",
    },
  ];
  jest.spyOn(global, "fetch").mockResolvedValue({
    json: jest.fn().mockResolvedValue(data),
  });
});

describe("Cart item functions properly", () => {
  it("Price of item changes based on amount", async () => {
    render(
      <MemoryRouter initialEntries={["/catalog"]}>
        <App />
      </MemoryRouter>
    );

    const addToCartButton = await screen.findByRole("button", {
      name: /Add To Cart/,
    });
    userEvent.click(addToCartButton);
    userEvent.click(screen.getByRole("link", { name: /cart/i }));

    const amountInput = screen.getByRole("spinbutton");
    userEvent.type(amountInput, "2");

    expect(screen.getByText("£156")).toBeInTheDocument();
  });
});
