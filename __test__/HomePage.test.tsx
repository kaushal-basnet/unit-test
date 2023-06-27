import Home from "@/app/page";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
describe("Home page", () => {
  describe("Rendering", () => {
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
  });
  describe("Behaviour", () => {
    it("should click on show text button and find new text", async () => {
      render(<Home />);
      expect(screen.queryByText("This is the text")).not.toBeInTheDocument();
      const showTextButton = screen.getByRole("button", {
        name: "show me the text",
      });
      await userEvent.click(showTextButton);
      //get the text after button click using asyncronous userEvent
      // expect(screen.getByText("This is the text")).toBeInTheDocument;

      //findBy...: Returns a Promise which resolves when an element is found which matches the given query.
      //upto 1000ms
      // expect(await screen.findByText("This is the text")).toBeInTheDocument;
      // more than 1000ms, findBy use 3 argument
      expect(await screen.findByText("This is the text",{}, {timeout:1100})).toBeInTheDocument;

    });
  });
});
