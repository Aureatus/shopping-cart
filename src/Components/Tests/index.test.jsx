import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../../App";

it("Renders header and homepage correctly", () => {
  const { container } = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  expect(container).toMatchSnapshot();
});
