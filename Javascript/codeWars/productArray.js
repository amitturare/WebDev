// https://www.codewars.com/kata/5a905c2157c562994900009d

function productArray(num) {
	const resultantArr = [];

	for (let lIndex = 0; lIndex < num.length; lIndex++) {
		let product = 1;
		for (let rIndex = num.length - 1; rIndex >= 0; rIndex--) {
			if (lIndex !== rIndex) {
				product *= num[rIndex];
			}
		}
		resultantArr.push(product);
	}

	return resultantArr;
}

// console.log(productArray([3, 27, 4, 2])); // [216,24,162,324]
// console.log(productArray([75, 5, 5])); // [25, 75, 75]
console.log(productArray([1, 2, 3, 4, 5])); // [25, 75, 75]
