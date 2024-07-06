import React, { useContext } from "react";
import { render } from "@testing-library/react";
import { AuthContext, AuthProvider } from "../context/AuthContext";

// Mock child component that consumes AuthContext
const MockConsumer: React.FC = () => {
  const { errorMessage, setErrorMessage } = useContext(AuthContext);

  // Example usage of context values
  const handleSetError = () => {
    setErrorMessage("Test error message");
  };

  return (
    <div>
      <span>{errorMessage}</span>
      <button onClick={handleSetError}>Set Error</button>
    </div>
  );
};

describe("AuthProvider", () => {
  it("renders children without crashing", () => {
    const { getByText } = render(
      <AuthProvider>
        <MockConsumer />
      </AuthProvider>
    );

    expect(getByText("Set Error")).toBeInTheDocument();
  });

  it("provides default values to AuthContext", () => {
    const { errorMessage, setErrorMessage } = useContext(AuthContext);
    expect(errorMessage).toEqual("");
    expect(typeof setErrorMessage).toBe("function");
  });

  it("updates errorMessage via setErrorMessage", () => {
    const { getByText } = render(
      <AuthProvider>
        <MockConsumer />
      </AuthProvider>
    );

    const setErrorButton = getByText("Set Error");
    setErrorButton.click();

    const errorMessageElement = getByText("Test error message");
    expect(errorMessageElement).toBeInTheDocument();
  });
});
