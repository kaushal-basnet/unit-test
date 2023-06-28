import { UserProfile } from "../src/app/components/UserProfile";
import { render, screen } from "@testing-library/react";

describe("UserProfile - Rendering", () => {
  it("should have text Email Verified when isEmailVerified is true", () => {
    render(
      <UserProfile
        displayname="kazi"
        userName="kaushal"
        email="kaushal@gmail.com"
        isEmailVerified={true}
      />
    );
    expect(screen.getByText("Email Verified")).toBeInTheDocument();
    expect(screen.queryByText("Email Not Verified")).not.toBeInTheDocument();
  });
  it("should have text Email Verified when isEmailVerified is false", () => {
    render(
      <UserProfile
        displayname="kazi"
        userName="kaushal"
        email="kaushal@gmail.com"
        isEmailVerified={false}
      />
    );
    expect(screen.getByText("Email Not Verified")).toBeInTheDocument();
    expect(screen.queryByText("Email Verified")).not.toBeInTheDocument();
  });
});
