import { render, screen, waitFor } from "@testing-library/react";
import App from "../../../App";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

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

describe("Catalog Item functionality works correctly", () => {
  it("Add To Cart changes form to h1", async () => {
    render(
      <MemoryRouter initialEntries={["/catalog"]}>
        <App />
      </MemoryRouter>
    );

    const addToCartButton = await screen.findByRole("button", {
      name: /Add To Cart/,
    });
    userEvent.click(addToCartButton);

    const ItemInCartText = screen.getByRole("heading", {
      name: /item in cart\./i,
    });

    expect(ItemInCartText).toBeInTheDocument();
  });

  it("Removal from Cart changes h1 to form", async () => {
    render(
      <MemoryRouter initialEntries={["/catalog"]}>
        <App />
      </MemoryRouter>
    );
    let addToCartButton = await screen.findByRole("button", {
      name: /Add To Cart/,
    });
    userEvent.click(addToCartButton);

    expect(
      screen.getByRole("heading", {
        name: /item in cart\./i,
      })
    ).toBeInTheDocument();
    userEvent.click(screen.getByRole("link", { name: /cart/i }));
    const amountInput = screen.getByRole("spinbutton");
    userEvent.clear(amountInput);
    userEvent.click(screen.getByRole("link", { name: /catalog/i }));
    addToCartButton = screen.queryByRole("button", {
      name: /Add To Cart/,
    });
    await waitFor(() => {
      expect(
        screen.queryByRole("heading", {
          name: /item in cart\./i,
        })
      ).not.toBeInTheDocument();
    });

    await waitFor(() => {
      expect(addToCartButton).toBeInTheDocument();
    });
  });
});
