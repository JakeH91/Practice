var fib = [1, 1, 2];
var total = 0;


for (var i = 0; i < 33; i++) {
  fib.push(fib[fib.length-1] + fib[fib.length-2]);
  if (fib[i]%2 === 0 && fib[i] < 4000000){
    total += fib[i];
  };
};

window.alert("Total = " + total);