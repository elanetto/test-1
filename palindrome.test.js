import { isWordPalindrome, isSentencePalindrome } from "./palindrome";

test("isPalindrome function is defined", () => {
	expect(isWordPalindrome).toBeDefined();
});

test("isPalindrome function should return true (racecar)", () => {
	expect(isWordPalindrome("racecar")).toBeTruthy();
});
test("isPalindrome function should return false (hello)", () => {
	expect(isWordPalindrome("hello")).toBeFalsy();
});
test("isPalindrome function should return true (Anna)", () => {
	expect(isWordPalindrome("Anna")).toBeTruthy();
});
test("isSentencePalindrome function is defined", () => {
	expect(isSentencePalindrome).toBeDefined();
});
test("isSentencePalindrome function should return true", () => {
	expect(isSentencePalindrome("racecar")).toBeTruthy();
});
test("isSentencePalindrome function should return false", () => {
	expect(isSentencePalindrome("hello")).toBeFalsy();
});
test("isSentencePalindrome function should return false(hello world", () => {
	expect(isSentencePalindrome("hello world")).toBeFalsy();
});
test("isSentencePalindrome function should return true (rats live on no evil star)", () => {
	expect(isSentencePalindrome("rats live on no evil star")).toBeTruthy();
});
test("isSentencePalindrome function should return true (do geese see god)", () => {
	expect(isSentencePalindrome("do geese see god")).toBeTruthy();
});
test("isSentencePalindrome function should return true (Do geese see God)", () => {
	expect(isSentencePalindrome("Do geese see God")).toBeTruthy();
});
