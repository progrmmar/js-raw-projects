/*
    Project Name: sumPrimes
    Author: Arjun Roy 
    Description: Adding the prime under the provided number
    Date: 01-02-2036
*/

const sumPrimes = number => {
    const primeNumbers = [];

    if (number === 2) return number;

    let derivative = [];
    for (let n = 2; n <= number; n++) {
        for (let i = 1; i <= n; i++) {
            if (n % i === 0) {
                derivative.push(i);
            }
        }
        if (derivative.length <= 2) {
            primeNumbers.push(n);
        }
        derivative = [];
    }

    const total = primeNumbers.reduce((total, primeNum) => {
        return total + primeNum;
    });

    return total;
};
