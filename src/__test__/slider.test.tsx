import slider from "../scripts/slider";

// Mock tns function
jest.mock("tns", () => {
  return jest.fn(() => ({
    // Mocked slider instance methods
    goTo: jest.fn(),
    destroy: jest.fn(),
  }));
});

describe("slider", () => {
  it("initializes slider with correct options", () => {
    const sliderInstance = slider();

    // Expect tns to be called with correct options
    expect(sliderInstance).toBeDefined();
    expect(sliderInstance.container).toBe(".my-slider");
    expect(sliderInstance.items).toBe(3);
    expect(sliderInstance.slideBy).toBe(1);
    expect(sliderInstance.center).toBe(true);
    expect(sliderInstance.mouseDrag).toBe(true);
    expect(sliderInstance.autoplay).toBe(true);
    expect(sliderInstance.nav).toBe(false);
    expect(sliderInstance.autoplayButtonOutput).toBe(false);
    expect(sliderInstance.controlsContainer).toBe("#custom-control");
    expect(sliderInstance.responsive).toEqual({
      1024: {
        items: 2,
      },
      100: {
        items: 1,
      },
    });
  });

  // You can add more tests to cover other functionalities of the slider if needed
});
