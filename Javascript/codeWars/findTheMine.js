// https://www.codewars.com/kata/528d9adf0e03778b9e00067e

function mineLocation(arr) {
	let size = arr.length ** 2;
	let row = 0;
	let col = 0;

	for (let index = 0; index < size; index++) {
		if (arr[row][col] === 1) {
			return [row, col];
		}

		col++;

		if (row < arr.length && col === arr.length) {
			row++;
			col = 0;
		}
	}
}

// console.log(
// 	mineLocation([
// 		[0, 0],
// 		[0, 0],
// 	])
// ); // [0. 0]
console.log(
	mineLocation([
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 1],
	])
); // [0, 0]
// console.log(
// 	mineLocation([
// 		[0, 0, 0, 0],
// 		[0, 0, 0, 0],
// 		[0, 0, 1, 0],
// 		[0, 0, 0, 0],
// 	])
// ); // [2, 2]
