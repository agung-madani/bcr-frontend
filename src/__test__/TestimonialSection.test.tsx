import { render } from "@testing-library/react";
import TestimonialSection from "../components/TestimonialSection";

jest.mock("../scripts/slider");

describe("TestimonialSection Component", () => {
  it("renders without crashing", () => {
    render(<TestimonialSection />);
    // Add assertions if needed
  });

  // You can add more specific tests to check the content or behavior
});
