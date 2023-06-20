import Home from "@/app/page";
import { render, screen } from "@testing-library/react";

describe("Home page - Rendering", () => {
  it("shoud have home page text", () => {
    render(<Home />);
    screen.getByText("Jest");
  });
});
