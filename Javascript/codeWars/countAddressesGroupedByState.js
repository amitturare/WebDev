// https://www.codewars.com/kata/55f8370b0229d3dad000007a

function count(addresses) {
	const stateCounts = {};

	addresses.forEach((address) => {
		if (!address.state) {
			throw new Error();
		}

		if (!stateCounts[address.state]) {
			stateCounts[address.state] = 1;
		} else {
			stateCounts[address.state]++;
		}
	});

	const result = [];
	for (let state in stateCounts) {
		result.push({ state, count: stateCounts[state] });
	}

	return result;
}

const addresses = [{ state: "AK" }, { state: "AK" }, { state: "AK" }, { state: "CA" }, { state: "CA" }];
console.log(count(addresses));
