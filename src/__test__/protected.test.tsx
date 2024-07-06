import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Protected from "../components/protected";

// Mock localStorage to simulate different token states
const localStorageMock = {
  getItem: jest.fn(),
};
Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
});

describe("Protected component", () => {
  beforeEach(() => {
    localStorageMock.getItem.mockClear();
  });

  it("renders children when token is present", () => {
    // Mock a token being present in localStorage
    localStorageMock.getItem.mockReturnValueOnce("mockToken");

    const { getByText } = render(
      <MemoryRouter>
        <Protected>
          <div>Protected Content</div>
        </Protected>
      </MemoryRouter>
    );

    expect(getByText("Protected Content")).toBeInTheDocument();
  });

  it("redirects to login page when token is not present", () => {
    // Mock no token being present in localStorage
    localStorageMock.getItem.mockReturnValueOnce(null);

    const { container } = render(
      <MemoryRouter>
        <Protected>
          <div>Protected Content</div>
        </Protected>
      </MemoryRouter>
    );

    // Assert that the link to "/login" is rendered
    const navigateElement = container.querySelector('a[href="/login"]');
    expect(navigateElement).toBeInTheDocument();
  });
});
