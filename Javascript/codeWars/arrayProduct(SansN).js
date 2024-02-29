/// https://www.codewars.com/kata/5b3e609cd58499284100007a

function productSansN(numbers) {
	let numberOfZeros = 0;
	let negativeCount = 0;

	numbers.forEach((n) => {
		if (n === 0) {
			numberOfZeros++;
		} else if (n < 0) {
			negativeCount++;
		}
	});

	const totalProduct = numbers.reduce((product, currValue) => {
		product = BigInt(product);
		currValue = BigInt(currValue);
		return product * currValue;
	}, 1n);

	if (!numberOfZeros) {
		return numbers.map((n) => totalProduct / BigInt(n));
	}
	if (numberOfZeros == 1) {
		const productWithoutZero = numbers.filter((n) => n !== 0).reduce((p, c) => p * BigInt(c), 1n);
		return numbers.map((n) => (n ? 0n : BigInt(productWithoutZero)));
	}

	if (negativeCount % 2 === 0) {
		// Even number of negative numbers
		return numbers.map((n) => (n === 0 ? totalProduct : totalProduct / BigInt(n)));
	} else {
		// Odd number of negative numbers
		return numbers.map((n) => (n === 0 ? 0n : n < 0 ? totalProduct / BigInt(n) : 0n));
	}
}

// console.log(productSansN([1, 1, 1])); // [1n, 1n, 1n]
// console.log(productSansN([2, 3, 4, 5])); // [60n, 40n, 30n, 24n]
console.log(productSansN([9, 0, -2])); // [60n, 40n, 30n, 24n]
console.log(productSansN([0, -99, 0])); // [60n, 40n, 30n, 24n]
// console.log(productSansN([4, 7, 3, 6, 2, 11, 14, 4, 7, 5])); // [5433120n, 3104640n, 7244160n, 3622080n, 10866240n, 1975680n, 1552320n, 5433120n, 3104640n, 4346496n]

// const withoutZeroArr = [9, 0, -2].filter((n) => n !== 0).reduce((p, c) => p * c);
// const ans = [9, 0, -2].map((n) => (n ? 0 : withoutZeroArr));
// console.log(ans);
