// https://www.codewars.com/kata/520d9c27e9940532eb00018e

function solution(...num) {
	for (let i = 0; i < num.length; i++) {
		for (let j = num.length; j > i; j--) {
			if (num[i] === num[j]) {
				return true;
			}
		}
	}
	return false;
}

console.log(solution(1, 2, 3, 2, 1));