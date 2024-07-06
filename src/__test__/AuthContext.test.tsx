import { render, act, fireEvent } from "@testing-library/react";
import { AuthProvider, AuthContext, LoginData } from "../context/AuthContext";
import axios from "axios";

jest.mock("axios");

const mockAxios = axios as jest.Mocked<typeof axios>;

describe("AuthContext", () => {
  beforeEach(() => {
    localStorage.clear(); // Clear localStorage before each test
  });

  const renderWithContext = (component: JSX.Element) => {
    return render(<AuthProvider>{component}</AuthProvider>);
  };

  it("sets error message on failed login", async () => {
    const errorMessage = "Invalid credentials";
    mockAxios.post.mockRejectedValueOnce({
      response: { data: { message: errorMessage } },
    });

    let renderedComponent: any;
    await act(async () => {
      renderedComponent = renderWithContext(
        <AuthContext.Consumer>
          {({ login, errorMessage }) => (
            <>
              <button
                onClick={async () => {
                  try {
                    await login({
                      email: "test@example.com",
                      password: "password",
                    } as LoginData);
                  } catch (error) {
                    // Error handling
                  }
                }}
              >
                Login
              </button>
              {errorMessage && <div>{errorMessage}</div>}
            </>
          )}
        </AuthContext.Consumer>
      );
    });

    const button = renderedComponent.getByText("Login");
    fireEvent.click(button);

    const errorElement = await renderedComponent.findByText(errorMessage);
    expect(errorElement).toBeInTheDocument();
  });

  it("sets token on successful login", async () => {
    const token = "mocked-token";
    mockAxios.post.mockResolvedValueOnce({ data: { token } });

    let renderedComponent: any;
    await act(async () => {
      renderedComponent = renderWithContext(
        <AuthContext.Consumer>
          {({ login }) => (
            <button
              onClick={async () => {
                try {
                  await login({
                    email: "test@example.com",
                    password: "password",
                  } as LoginData);
                } catch (error) {
                  // Error handling
                }
              }}
            >
              Login
            </button>
          )}
        </AuthContext.Consumer>
      );
    });

    const button = renderedComponent.getByText("Login");
    fireEvent.click(button);

    // Wait for token to be set in localStorage
    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(localStorage.getItem("tokenBinar")).toBe(token);
  });
});
