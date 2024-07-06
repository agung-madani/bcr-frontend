import { render, fireEvent, waitFor } from "@testing-library/react";
import LoginFormSection from "../components/LoginFormSection";
import { AuthProvider } from "../context/AuthContext";
import axios from "axios";

jest.mock("axios"); // Mock axios

describe("LoginFormSection", () => {
  it("displays error message on failed login", async () => {
    const errorMessage = "Invalid credentials";
    // Mock Axios to simulate failed login
    axios.post = jest
      .fn()
      .mockImplementationOnce(() =>
        Promise.reject({ response: { data: { message: errorMessage } } })
      );

    const { getByText, getByPlaceholderText } = render(
      <AuthProvider>
        <LoginFormSection />
      </AuthProvider>
    );

    // Fill out form fields
    fireEvent.change(getByPlaceholderText("Email"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(getByPlaceholderText("Password"), {
      target: { value: "password" },
    });

    // Submit form
    fireEvent.submit(getByText("Sign In"));

    // Wait for error message to appear
    const errorElement = await waitFor(() => getByText(errorMessage));
    expect(errorElement).toBeInTheDocument();

    // Optionally, check other assertions related to error handling
  });

  // Add more test cases for other branches and scenarios as needed
});
