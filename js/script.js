// Primes finder from range
// This programm will return in concole the list of primes from given range of special numbers
// Prime numbers are special numbers, greater than 1, that have exactly two factors, themselves and 1.


const start = 3;
const end = 20;
const result = [];

for (let i = start; i <= end; i = i + 1) {
    for (let index = 2; index <= i; index = index + 1) { // index = 2, because number 1 is not a prime number as it only has one factor

        if ((i % index) > 0) {
            continue;
        } // doesnt pass special numbers that have remainder of division, but still passes numbers that doesn have remainder of division for example: (2,4,6...)

        if ((i / index) > 1) {
            break;
        } // doesnt pass special numbers division result of which is > 1, because primes can only be divided by themselves and 1. As we excluded 1 from the beginning, division result has to be 1.

        {
            result.push(index)
        }
    }
}
console.log(result)


