// https://www.codewars.com/kata/526989a41034285187000de4

function ipsBetween(start, end) {
	const startArr = start.split(".");
	const endArr = end.split(".");
	const difference = [];

	for (let index = 0; index < startArr.length; index++) {
		difference[index] = endArr[index] - startArr[index];
	}

	return difference[0] * 256 * 256 * 256 + difference[1] * 256 * 256 + difference[2] * 256 + difference[3];
}

// console.log(ipsBetween("150.0.0.0", "150.0.0.1")); // 1
// console.log(ipsBetween("20.0.0.10", "20.0.1.0")); // 243
// console.log(ipsBetween("10.11.12.13", "10.11.13.0")); // 243
