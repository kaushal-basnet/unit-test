import { render } from "@testing-library/react";
import { UserList } from "../src/app/components/UserList";
describe("UserList - Rendering", () => {
  it("should have the username kaushal from the mock api", () => {
    render(<UserList />);
  });
});
