import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import { within } from "@testing-library/dom";
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

describe("Cart content renders according to cartData", () => {
  it("Item is rendered in cart after adding from catalog", async () => {
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

    const title = await screen.findByText("test");
    expect(title).toBeInTheDocument();

    const price = await screen.findByText("£13");
    expect(price).toBeInTheDocument();

    const amount = await screen.findByDisplayValue("1");
    expect(amount.value).toEqual("1");
  });

  it("Banner is rendered with correct amount of items stated", async () => {
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

    const main = screen.getByRole("main", { name: /cart section/i });
    const banner = within(main).getByRole("banner");
    expect(banner.textContent).toEqual("1 items in your basket.");
  });

  it("Total cost is rendered with correct number", async () => {
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

    expect(screen.getByText(/total price: £13/i)).toBeInTheDocument();

    const amountInput = screen.getByRole("spinbutton");
    userEvent.type(amountInput, "2");

    expect(screen.getByText(/total price: £156/i)).toBeInTheDocument();
  });

  it("Cart item removed when amount is 0", async () => {
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
    userEvent.clear(amountInput);
    expect(screen.queryByText("test")).not.toBeInTheDocument();
  });
});
