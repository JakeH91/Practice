var number = prompt("To discover all the prime factors of any number, just enter it below and magic will tell you:", "600851475143");
var factors = [];

function isPrime(value) {
  for (var i = 2; i < value; i++) {
    if (value%i === 0) {
      return false;
    }
  };
};

for (var i = 2; i < (number + 1); i++) {
  if (number%i === 0 && isPrime(i) !== false) {
    factors.push(i);
    number /= i;
    i = 1;
  }
};

var allPFactors = factors.toString();

window.alert("The prime factors are " + allPFactors);
window.alert("The highest prime factor is " + factors[factors.length - 1]);