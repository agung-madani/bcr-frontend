import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import axios from "axios"; // You may need to mock axios responses
import LoginFormSection from "../components/LoginFormSection";
import { AuthContext } from "../context/AuthContext";

jest.mock("axios");

describe("LoginFormSection component", () => {
  it("submits the form and handles successful response", async () => {
    const mockContextValue = {
      Auth: [],
      errorMessage: "",
      setErrorMessage: jest.fn(),
    };

    render(
      <AuthContext.Provider value={mockContextValue}>
        <LoginFormSection />
      </AuthContext.Provider>
    );

    // Fill in the form fields
    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Password"), {
      target: { value: "password123" },
    });

    // Mock the axios post call
    (axios.post as jest.Mock).mockResolvedValueOnce({
      data: { token: "mockToken123" },
    });

    // Submit the form
    fireEvent.click(screen.getByText("Sign In"));

    // Wait for the async operations to complete
    await waitFor(() => {
      expect(localStorage.setItem).toHaveBeenCalledWith(
        "tokenBinar",
        "mockToken123"
      );
      expect(window.location.href).toBe("/Auth-management");
      expect(mockContextValue.setErrorMessage).not.toHaveBeenCalled();
    });
  });

  // Add more test cases as needed
});
