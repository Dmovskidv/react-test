import { render, screen } from "@testing-library/react";
import Person from "../components/Person";

describe("Person Component", () => {
  test("renders without crashing", () => {
    render(<Person firstName="John" lastName="Doe" />);
    const personElement = screen.getByText(
      /First Name : John , Last Name : Doe/i
    );
    expect(personElement).toBeInTheDocument();
  });

  test("displays correct first name and last name", () => {
    render(<Person firstName="Alice" lastName="Smith" />);
    expect(
      screen.getByText(/First Name : Alice , Last Name : Smith/i)
    ).toBeInTheDocument();
  });
});
