import { isValidUsername } from "./isValidUsername";

describe("username validation", () => {
  test("Should not be empty", () => {
    expect(isValidUsername("")).toBe(false);
  });
  test("Should be true for letters", () => {
    expect(isValidUsername("userName")).toBe(true);
  });
  test("Should be true for numbers", () => {
    expect(isValidUsername("1234")).toBe(true);
  });
  test("Should be true for letters & numbers", () => {
    expect(isValidUsername("userName1234")).toBe(true);
  });
  test("Should be false for special characters", () => {
    expect(isValidUsername("!@#$")).toBe(false);
  });
  test("Should be false for mixed with letters and numbers special characters", () => {
    expect(isValidUsername("123abc./?")).toBe(false);
  });
  test("Should be false for emojis", () => {
    expect(isValidUsername("🍔")).toBe(false);
  });
  test("Should be false for other letters than used in English", () => {
    expect(isValidUsername("漢ÄŒŸ")).toBe(false);
  });
});
