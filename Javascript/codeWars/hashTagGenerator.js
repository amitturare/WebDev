// https://www.codewars.com/kata/52449b062fb80683ec000024/

function generateHashtag(str) {
	const trimmedStr = str.trim();
	if (trimmedStr === "") {
		return false;
	}

	const strArr = trimmedStr.split(" ");
	const resultantArr = [];
	for (let item of strArr) {
		item = item.charAt(0).toUpperCase() + item.slice(1);
		resultantArr.push(item);
	}

	const result = ("#" + resultantArr.join("")).length > 140 ? false : "#" + resultantArr.join(""); 
	return result;
}

console.log(generateHashtag("      Amit turare"));
