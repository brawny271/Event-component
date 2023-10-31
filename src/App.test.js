import { render, screen } from "@testing-library/react";
import App from "./App";

describe("images", () => {
  test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText("Learn React");
    expect(linkElement).toBeInTheDocument();
  });
});
