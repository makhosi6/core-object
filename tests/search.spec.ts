import "../lib/search";
describe("_search", () => {
  it("_search return a boolean", () => {
    let arr = [1, 2, 3];
    expect(arr._search("str")).toBe(true);
    expect(arr._search("")).toBe(false);
  });
  it("_search to be a function", () => {
    let arr = ["one", "two", "three"];
    expect(arr._search).not.toBeUndefined();
    expect(arr._search instanceof Function).toBe(true);
  });
});
