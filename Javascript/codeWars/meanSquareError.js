// https://www.codewars.com/kata/51edd51599a189fe7f000015

const solution = (firstArray, secondArray) => {
	let sum = 0;
	for (let index = 0; index < firstArray.length; index++) {
		const difference = secondArray[index] - firstArray[index];
		sum += difference ** 2;
	}

	return sum / firstArray.length;
};

// console.log(solution([1, 2, 3], [4, 5, 6])); // 9
// console.log(solution([10, 20, 10, 2], [10, 25, 5, -2])); // 16.5
// console.log(solution([0, -1], [-1, 0])); // 1
