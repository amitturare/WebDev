// https://www.codewars.com/kata/59a8570b570190d313000037

function sumCubes(num) {
    let sum = 0;
	for (let n = 1; n <= num; n++) {
        sum += n ** 3;
    }

    return sum;
}

console.log(sumCubes(123));

// 2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
// 3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)
// [1, 1], [2, 9], [3, 36], [4, 100], [10, 3025], [123, 58155876]
