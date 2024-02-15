// https://www.codewars.com/kata/5262119038c0985a5b00029f

function isPrime(num) {
	if (num <= 1) {
		return false;
	}

	for (let i = 2; i <= Math.sqrt(num); i++) {
		if (num % i === 0) {
			return false;
		}
	}
	return true;
}

console.log(isPrime(45));

// Test.assertEquals(isPrime(0),  false, "0 is not prime");
// Test.assertEquals(isPrime(1),  false, "1 is not prime");
// Test.assertEquals(isPrime(2),  true, "2 is prime");
// Test.assertEquals(isPrime(73), true, "73 is prime");
// Test.assertEquals(isPrime(75), false, "75 is not prime");
// Test.assertEquals(isPrime(-1), false, "-1 is not prime");

// Test.assertEquals(isPrime(3),  true, "3 is prime");
// Test.assertEquals(isPrime(5),  true, "5 is prime");
// Test.assertEquals(isPrime(7),  true, "7 is prime");
// Test.assertEquals(isPrime(41), true, "41 is prime");
// Test.assertEquals(isPrime(5099), true, "5099 is prime");

// Test.assertEquals(isPrime(4),  false, "4 is not prime");
// Test.assertEquals(isPrime(6),  false, "6 is not prime");
// Test.assertEquals(isPrime(8),  false, "8 is not prime");
// Test.assertEquals(isPrime(9), false, "9 is not prime");
// Test.assertEquals(isPrime(45), false, "45 is not prime");
// Test.assertEquals(isPrime(-5), false, "-5 is not prime");
// Test.assertEquals(isPrime(-8), false, "-8 is not prime");
// Test.assertEquals(isPrime(-41), false, "-41 is not prime");
