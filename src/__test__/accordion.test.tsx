import toggleAccordion from "../scripts/accordion";

describe("toggleAccordion", () => {
  let button: HTMLElement;
  let body: HTMLElement;
  let icon: HTMLElement | null;

  beforeEach(() => {
    // Mock button and body elements
    body = document.createElement("div");
    body.classList.add("accordion-body");
    body.classList.add("hidden");

    icon = document.createElement("i");
    button = document.createElement("button");
    button.classList.add("accordion-header");
    button.appendChild(icon);
    button.insertAdjacentElement("afterend", body);

    document.body.appendChild(button);
    document.body.appendChild(body);
  });

  afterEach(() => {
    // Clean up elements after each test
    button.remove();
    body.remove();
  });

  it("should open the accordion when closed", () => {
    toggleAccordion(button);

    expect(body.classList.contains("hidden")).toBe(false);
    expect(icon?.classList.contains("bi-chevron-down")).toBe(false);
    expect(icon?.classList.contains("bi-chevron-up")).toBe(true);
  });

  it("should close the accordion when opened", () => {
    body.classList.remove("hidden");

    toggleAccordion(button);

    expect(body.classList.contains("hidden")).toBe(true);
    expect(icon?.classList.contains("bi-chevron-down")).toBe(true);
    expect(icon?.classList.contains("bi-chevron-up")).toBe(false);
  });
});
