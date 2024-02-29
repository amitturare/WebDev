// https://www.codewars.com/kata/57b6f5aadb5b3d0ae3000611

function getLengthOfMissingArray(arrays) {
	if (!arrays || arrays.length === 0 || arrays.some((arr) => !arr || arr.length === 0)) {
		return 0;
	}

	const lengths = arrays.map((arr) => (arr ? arr.length : 0)).sort((a, b) => a - b);
	console.log(lengths);

	for (let index = 0; index < lengths.length - 1; index++) {
		if (lengths[index + 1] - lengths[index] > 1) {
			return lengths[index] + 1;
		}
	}

	return 0;
}

// console.log(getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]])); // 3
// console.log(getLengthOfMissingArray([[5, 2, 9], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]])); // 2
// console.log(getLengthOfMissingArray([[null], [null, null, null]])); // 2
// console.log(getLengthOfMissingArray([["a", "a", "a"], ["a", "a"], ["a", "a", "a", "a"], ["a"], ["a", "a", "a", "a", "a", "a"]])); // 5
console.log(
	getLengthOfMissingArray([
		[1, 4, 2, 4, 3, 3],
		[],
		[1],
		[0, 2, 0],
		[2, 3, 4, 1],
		[0, 1, 4, 1, 1, 2, 0, 2],
		[4, 0, 4, 2, 1, 1, 0],
		[1, 1, 2, 3, 4],
		[4, 0, 0, 3, 2, 2, 3, 2, 4],
		[3, 0, 4, 2, 3, 4, 1, 2, 1, 2],
	])
); // 0
