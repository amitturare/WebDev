// https://www.codewars.com/kata/526233aefd4764272800036f

function matrixAddition(a, b) {
	const rowLen = a.length;
	const colLen = a.length;

	const resultantMatrix = [];
	for (let rows = 0; rows < rowLen; rows++) {
		resultantMatrix.push([]);
	}

	let { row, col } = { row: 0, col: 0 };

	for (let index = 0; index < rowLen * colLen; index++) {
		resultantMatrix[row][col] = a[row][col] + b[row][col];
		col++;

		if (col === colLen) {
			row++;
			col = 0;
		}
	}

	return resultantMatrix;
}

console.log(
	matrixAddition(
		[
			[1, 2, 3],
			[3, 2, 1],
			[1, 1, 1],
		],
		[
			[2, 2, 1],
			[3, 2, 3],
			[1, 1, 3],
		]
	)
);

// console.log(
// 	matrixAddition(
// 		[
// 			[1, 2],
// 			[1, 2],
// 		],

// 		[
// 			[2, 3],
// 			[2, 3],
// 		]
// 	)
// );

/*
    (
    A = 
    [ [1, 2],
    [1, 2] ],
    B =
    [ [2, 3],
    [2, 3] ] 
    )
*/
