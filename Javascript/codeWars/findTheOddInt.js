// https://www.codewars.com/kata/54da5a58ea159efa38000836

const findOdd = (arr) => {
	const countObject = {};

	for (let item of arr) {
		if (countObject[item] === undefined) {
			countObject[item] = 1;
		} else {
			countObject[item] += 1;
		}
	}

	for (let key in countObject) {
		if (countObject[key] % 2 !== 0) {
			return parseInt(key);
		}
	}
};

// console.log(findOdd([7])); // 7
// console.log(findOdd([1, 1, 2])); // 2
// console.log(findOdd([0, 1, 0, 1, 0])); // 0
// console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])); // 4
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])); // 5
