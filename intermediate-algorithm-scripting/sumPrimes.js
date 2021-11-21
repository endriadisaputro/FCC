function sumPrimes(num) {
    const arrPrime = [];
    for (let i = 1; i <= num; i++) {
        let prime = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                prime = false;
                break;
            }
        }
        if (i > 1 && prime) {
            arrPrime.push(i);
        }
    }
    return arrPrime.reduce((acc, curr) => acc + curr);
}

console.log(sumPrimes(977));


/*
  Sum All Primes
  A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

  Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

  sumPrimes(10) should return a number.

  sumPrimes(10) should return 17.

  sumPrimes(977) should return 73156
  */