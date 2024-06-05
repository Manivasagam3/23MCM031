import React from 'react';

const generatePrimeNumbers = (limit) => {
  const primes = [];
  for (let num = 2; primes.length < limit; num++) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(num);
    }
  }
  return primes;
};

const NumberList = ({ limit }) => {
  const numbers = generatePrimeNumbers(limit);

  return (
    <div>
      <h2>List of Prime Numbers (First {limit})</h2>
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
};

export default NumberList;