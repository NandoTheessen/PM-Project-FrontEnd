import React from "react";
import Button from "../components/button";
import "jest-dom/extend-expect";
import { cleanup, render } from "react-testing-library";

afterEach(cleanup);
describe("Should render a button component with corresponding properties", () => {
  it("should render a button element that displays the text passed into the component", () => {
    const text = "This is a test!";
    const { getByText } = render(<Button buttonText={text} />);
    const button = getByText(text);

    expect(button).toHaveTextContent(text);
  });
  test("should have the attribute type with the value button", () => {
    const text = "This is a test!";
    const { getByText } = render(<Button buttonText={text} />);
    const button = getByText(text);

    expect(button).toHaveAttribute("type", "button");
  });
});
