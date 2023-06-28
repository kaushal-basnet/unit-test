import { UserProfile } from "../src/app/components/UserProfile";
import { render, screen } from "@testing-library/react";

describe("UserProfile - Rendering", () => {
  it("should have text Email Verified when isEmailVerified is true", () => {
    render(
      <UserProfile
        displayName="kazi"
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
        displayName="kazi"
        userName="kaushal"
        email="kaushal@gmail.com"
        isEmailVerified={false}
      />
    );
    expect(screen.getByText("Email Not Verified")).toBeInTheDocument();
    expect(screen.queryByText("Email Verified")).not.toBeInTheDocument();
  });
  it("should have displayName end with three dots after 10 character if displayName length is greater than 16 characters", () => {
    render(
      <UserProfile
        displayName="kazikazikazikazikazikazi"
        userName="kaushal"
        email="kaushal@gmail.com"
        isEmailVerified={false}
      />
    );
    const displayNameSpanElement = screen.getByText(/Display Name: /);
    expect(displayNameSpanElement).toHaveTextContent(/.*\.\.\./); //.* => have special characters
  });
  it("should not end with three dots if displayName length is less than 16 characters", () => {
    render(
      <UserProfile
        displayName="kazi"
        userName="kaushal"
        email="kaushal@gmail.com"
        isEmailVerified={false}
      />
    );
    const displayNameSpanElement = screen.getByText(/Display Name: /);
    expect(displayNameSpanElement).not.toHaveTextContent(/.*\.\.\./); //.* => have special characters
  });
});
