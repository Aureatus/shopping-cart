import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";

import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import App from "../../../App";

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

describe("Content renders according to fetch API status", () => {
  it("Loading text is shown while API request is in progress", async () => {
    render(
      <MemoryRouter initialEntries={["/catalog"]}>
        <App />
      </MemoryRouter>
    );
    const loading = screen.getByText("Items loading... Please wait.");

    expect(loading).toBeInTheDocument();

    await waitForElementToBeRemoved(() =>
      screen.queryByText("Items loading... Please wait.")
    );
  });

  it("Error message is shown", async () => {
    window.fetch.mockImplementationOnce(() => {
      return Promise.reject({ message: "API is down" });
    });

    render(
      <MemoryRouter initialEntries={["/catalog"]}>
        <App />
      </MemoryRouter>
    );

    const errorMessage = await screen.findByText("API is down");
    expect(errorMessage).toBeInTheDocument();
  });

  it("Item title is rendered", async () => {
    render(
      <MemoryRouter initialEntries={["/catalog"]}>
        <App />
      </MemoryRouter>
    );

    const title = await screen.findByText("test");
    expect(title).toBeInTheDocument();
  });

  it("Item price is rendered", async () => {
    render(
      <MemoryRouter initialEntries={["/catalog"]}>
        <App />
      </MemoryRouter>
    );

    const price = await screen.findByText("£13");
    expect(price).toBeInTheDocument();
  });

  it("Item amount is rendered", async () => {
    render(
      <MemoryRouter initialEntries={["/catalog"]}>
        <App />
      </MemoryRouter>
    );

    const amount = await screen.findByDisplayValue("1");
    expect(amount.value).toEqual("1");
  });
});
