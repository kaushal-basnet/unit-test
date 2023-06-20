import Home from "@/app/page";
import { render, screen } from "@testing-library/react";

describe("Home page - Rendering", () => {
  it("shoud have home page text", () => {
    render(<Home />);
    expect(screen.getByText("Jest")).toBeInTheDocument();
  });
  it("should have button with text click me", () => {
    render(<Home />);
    expect(
      screen.getByRole("button", { name: "click me" })
    ).toBeInTheDocument();
  });

});
