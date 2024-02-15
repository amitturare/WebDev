// https://www.codewars.com/kata/525f50e3b73515a6db000b83

function createPhoneNumber(numbers) {
    return `(${numbers.slice(0, 3).join("")}) ${numbers.slice(3, 6).join("")}-${numbers.slice(6, 10).join("")}`;
}

console.log(createPhoneNumber([1, 1, 1, 2, 2, 2, 1, 1, 1, 1]));

// assert.strictEqual(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
// assert.strictEqual(createPhoneNumber([1, 1, 1, 2, 2, 2, 1, 1, 1, 1]), "(111) 111-1111");
// assert.strictEqual(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
