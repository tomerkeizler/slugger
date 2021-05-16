const app = require("./index");

/**
 * @describe [optional] - group of tests with a header to describe them
 */
describe("testing slugger basic functionality", () => {
  /**
   * @it - unit tests can use the 'it' syntax
   */
  it("slugger can slug string with spaces", () => {
    expect(app.slugger("a dummy string")).toEqual("a-dummy-string");
  });
  /**
   * @test - unit test can use the 'test' syntax
   */
  test("slugger can slug any number of spacy strings", () => {
    expect(
      app.slugger("hey all", "this is", "a", "slugger test", "by tomerpool")
    ).toEqual("hey-all-this-is-a-slugger-test-by-tomerpool");
  });
});
