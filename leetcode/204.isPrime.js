const countPrime = (n) => {
  let r = 0;
  for (let i = 2; i < n; i++) {
    isPrime(i) && r++;
  }
  return r;
};

const isPrime = (n) => {
  for (let i = 2, max = Math.sqrt(n); i <= max; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(countPrime(10));
