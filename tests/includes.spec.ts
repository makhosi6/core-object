import "../lib/includes";

describe("_include OR _contains", () => {
  it("_includes return a boolean", () => {
    let arr = [1, 2];
    expect(arr._includes("str")).toBe(true);
    expect(arr._includes("")).toBe(false);
  });
  it("_includes to be a function", () => {
    let arr = ["one", "two"];
    expect(arr._includes).not.toBeUndefined();
    expect(arr._includes instanceof Function).toBe(true);
  });
  it("_contains return a boolean", () => {
    let arr = [1, 2];
    expect(arr._contains("str")).toBe(true);
    expect(arr._contains("")).toBe(false);
  });
  it("_contains to be a function", () => {
    let arr = ["one", "two"];
    expect(arr._contains).not.toBeUndefined();
    expect(arr._contains instanceof Function).toBe(true);
  });
});
