import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { cookies } from "next/headers";
import LoginForm from "./index";

jest.mock("../../../utils/superbase/server", () => ({
  createClient: jest.fn(),
}));

jest.mock("next/headers", () => ({
  cookies: jest.fn(),
}));

jest.mock("next/navigation", () => ({
  redirect: jest.fn(),
}));

// Add this import for typing
import { createClient } from "../../../utils/superbase/server";

describe("LoginForm", () => {
  it("renders login form", async () => {
    const mockedCreateClient = createClient as jest.Mock;
    mockedCreateClient.mockReturnValue({
      auth: {
        getUser: jest.fn().mockResolvedValue({ data: { user: null } }) as any,
        signInWithPassword: jest.fn().mockResolvedValue({}) as any,
      },
    });

    const mockedCookies = cookies as jest.Mock;
    mockedCookies.mockReturnValue({});

    render(<LoginForm searchParams={undefined} />);

    const emailInput = screen.getByPlaceholderText("you@example.com");
    const passwordInput = screen.getByPlaceholderText("••••••••");
    const submitButton = screen.getByText("Logar");

    // Mock the API call or interaction with Supabase auth.signInWithPassword if needed.

    fireEvent.change(emailInput, { target: { value: "example@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.click(submitButton);

    // You may need to wait for some asynchronous operation to complete.
    await waitFor(() => {
      // Expectations based on your component behavior.
      expect(screen.getByText("Credenciais invalidas")).toBeInTheDocument();
      // ... add more expectations as needed.
    });
  });
});
