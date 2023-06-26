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
  it("should have input field with label text", () => {
    render(<Home />);
    expect(
      screen.getByLabelText(/Please enter random text/)
    ).toBeInTheDocument();
  });
  it("should have input field with label text", () => {
    render(<Home />);
    expect(screen.getByLabelText(/specific text/)).toBeInTheDocument(); //either id or htmFor word should be match like specific
  });
  it("should get by placeholder", () => {
    render(<Home />);
    expect(screen.getByPlaceholderText(/search/)).toBeInTheDocument();
  });
  it("should get by value", () => {
    render(<Home />);
    expect(screen.getByDisplayValue(/kaushal/)).toBeInTheDocument();
  });
  it("should not get the text: This is the text", () => {
    render(<Home />);
    expect(screen.queryByText("This is the text")).not.toBeInTheDocument();
  });
});
