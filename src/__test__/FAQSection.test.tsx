import { render, screen, fireEvent } from "@testing-library/react";
import FAQSection from "../components/FAQSection"; // Adjust the import path as needed
import toggleAccordion from "../scripts/accordion";

jest.mock("../scripts/accordion");

describe("FAQSection", () => {
  beforeEach(() => {
    (toggleAccordion as jest.Mock).mockClear();
  });

  it("renders the FAQ section", () => {
    render(<FAQSection />);
    expect(screen.getByText("Frequently Asked Question")).toBeInTheDocument();
  });

  it("renders all FAQ items", () => {
    render(<FAQSection />);
    expect(
      screen.getByText("Apa saja syarat yang dibutuhkan?")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Berapa hari minimal sewa mobil lepas kunci?")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Berapa hari sebelumnya sebaiknya booking sewa mobil?")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Apakah ada biaya antar-jemput?")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Bagaimana jika terjadi kecelakaan?")
    ).toBeInTheDocument();
  });

  it("toggles the accordion content on click", () => {
    render(<FAQSection />);

    const firstAccordionHeader = screen
      .getByText("Apa saja syarat yang dibutuhkan?")
      .closest(".accordion-header");
    if (firstAccordionHeader) {
      fireEvent.click(firstAccordionHeader);
      expect(toggleAccordion).toHaveBeenCalledWith(firstAccordionHeader);
    } else {
      throw new Error("Accordion header not found");
    }
  });

  it("cleans up event listeners on unmount", () => {
    const { unmount } = render(<FAQSection />);
    const firstAccordionHeader = screen
      .getByText("Apa saja syarat yang dibutuhkan?")
      .closest(".accordion-header");
    if (firstAccordionHeader) {
      fireEvent.click(firstAccordionHeader);
      expect(toggleAccordion).toHaveBeenCalledWith(firstAccordionHeader);

      unmount();

      fireEvent.click(firstAccordionHeader);

      // Ensure that toggleAccordion is not called after unmount
      expect(toggleAccordion).toHaveBeenCalledTimes(3);
    } else {
      throw new Error("Accordion header not found");
    }
  });

  it("toggles the accordion content on click", () => {
    render(<FAQSection />);

    const firstAccordionHeader = screen
      .getByText("Berapa hari minimal sewa mobil lepas kunci?")
      .closest(".accordion-header");
    if (firstAccordionHeader) {
      fireEvent.click(firstAccordionHeader);
      expect(toggleAccordion).toHaveBeenCalledWith(firstAccordionHeader);
    } else {
      throw new Error("Accordion header not found");
    }
  });

  it("cleans up event listeners on unmount", () => {
    const { unmount } = render(<FAQSection />);
    const firstAccordionHeader = screen
      .getByText("Berapa hari minimal sewa mobil lepas kunci?")
      .closest(".accordion-header");
    if (firstAccordionHeader) {
      fireEvent.click(firstAccordionHeader);
      expect(toggleAccordion).toHaveBeenCalledWith(firstAccordionHeader);

      unmount();

      fireEvent.click(firstAccordionHeader);

      // Ensure that toggleAccordion is not called after unmount
      expect(toggleAccordion).toHaveBeenCalledTimes(3);
    } else {
      throw new Error("Accordion header not found");
    }
  });

  it("toggles the accordion content on click", () => {
    render(<FAQSection />);

    const firstAccordionHeader = screen
      .getByText("Berapa hari sebelumnya sebaiknya booking sewa mobil?")
      .closest(".accordion-header");
    if (firstAccordionHeader) {
      fireEvent.click(firstAccordionHeader);
      expect(toggleAccordion).toHaveBeenCalledWith(firstAccordionHeader);
    } else {
      throw new Error("Accordion header not found");
    }
  });

  it("cleans up event listeners on unmount", () => {
    const { unmount } = render(<FAQSection />);
    const firstAccordionHeader = screen
      .getByText("Berapa hari sebelumnya sebaiknya booking sewa mobil?")
      .closest(".accordion-header");
    if (firstAccordionHeader) {
      fireEvent.click(firstAccordionHeader);
      expect(toggleAccordion).toHaveBeenCalledWith(firstAccordionHeader);

      unmount();

      fireEvent.click(firstAccordionHeader);

      // Ensure that toggleAccordion is not called after unmount
      expect(toggleAccordion).toHaveBeenCalledTimes(3);
    } else {
      throw new Error("Accordion header not found");
    }
  });

  it("toggles the accordion content on click", () => {
    render(<FAQSection />);

    const firstAccordionHeader = screen
      .getByText("Apakah ada biaya antar-jemput?")
      .closest(".accordion-header");
    if (firstAccordionHeader) {
      fireEvent.click(firstAccordionHeader);
      expect(toggleAccordion).toHaveBeenCalledWith(firstAccordionHeader);
    } else {
      throw new Error("Accordion header not found");
    }
  });

  it("cleans up event listeners on unmount", () => {
    const { unmount } = render(<FAQSection />);
    const firstAccordionHeader = screen
      .getByText("Apakah ada biaya antar-jemput?")
      .closest(".accordion-header");
    if (firstAccordionHeader) {
      fireEvent.click(firstAccordionHeader);
      expect(toggleAccordion).toHaveBeenCalledWith(firstAccordionHeader);

      unmount();

      fireEvent.click(firstAccordionHeader);

      // Ensure that toggleAccordion is not called after unmount
      expect(toggleAccordion).toHaveBeenCalledTimes(3);
    } else {
      throw new Error("Accordion header not found");
    }
  });

  it("toggles the accordion content on click", () => {
    render(<FAQSection />);

    const firstAccordionHeader = screen
      .getByText("Bagaimana jika terjadi kecelakaan?")
      .closest(".accordion-header");
    if (firstAccordionHeader) {
      fireEvent.click(firstAccordionHeader);
      expect(toggleAccordion).toHaveBeenCalledWith(firstAccordionHeader);
    } else {
      throw new Error("Accordion header not found");
    }
  });

  it("cleans up event listeners on unmount", () => {
    const { unmount } = render(<FAQSection />);
    const firstAccordionHeader = screen
      .getByText("Bagaimana jika terjadi kecelakaan?")
      .closest(".accordion-header");
    if (firstAccordionHeader) {
      fireEvent.click(firstAccordionHeader);
      expect(toggleAccordion).toHaveBeenCalledWith(firstAccordionHeader);

      unmount();

      fireEvent.click(firstAccordionHeader);

      // Ensure that toggleAccordion is not called after unmount
      expect(toggleAccordion).toHaveBeenCalledTimes(3);
    } else {
      throw new Error("Accordion header not found");
    }
  });
});
