#!/usr/bin/env node

var fs = require('fs');
// calculate the 1st 100 prime numbers


//check if a number n is prime, 0,1 are prime so return false, if > 1, send to checkPrime
//return true is prime, false is not prime
var isPrime = function(n){
	if(n == 0){
		return false;
	}
	else if (n == 1){
		return false;
	}
	else if (n == 2){
		return true;
	}
	else {
		return checkPrime(n)
	}
}

//check all of the divisors less than number n to see if they divide into the number n without a remainder
//if all numbers less than the number n divide with a remainder, the number is prime
var checkPrime = function(n){
	var prime = true;
	for (var i = 2; i < n; i++){
		var calc = n/i;
		console.log('number = ' + n + ' n/i = ' + calc + ' modulus = ' + calc%1);
		if (calc % 1 == 0){
			prime = false;
			break;
		}
	}
	
	return prime;
}

var firstkPrimes = function(k){
	var i = 1;
	var primeArr = [];
	while (primeArr.length < k){
		console.log('k = ' + k + ' i = ' + i);
		if (isPrime(i)){
			primeArr.push(i);
		}
		i++;
	}
	
	return primeArr;
}

var k = 100;
var joinCharacter = ','; // the character you would like to join the final prime array with
primes = firstkPrimes(k);
outfile = 'Homework1_2.txt';
outString = 'The first ' + k + ' Prime Numbers are ' + primes.join(joinCharacter);
fs.writeFileSync(outfile, outString)

console.log(outString);



