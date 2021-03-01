import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders a profile card", () => {
  const { getByText } = render(<App />);
  expect(getByText("Card Options")).toBeInTheDocument();
});
