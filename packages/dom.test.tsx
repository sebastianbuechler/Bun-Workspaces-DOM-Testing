import { render, screen } from "@testing-library/react";
import { expect, test } from "bun:test";

const MyComponent = () => <div data-testid="my-component">Hello World</div>;

test("Can use Testing Library", () => {
  render(<MyComponent />);
  const myComponent = screen.getByTestId("my-component");
  expect(myComponent).toBeInTheDocument();
});
