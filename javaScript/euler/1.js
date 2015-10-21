
var mathMachine = function(multiplesUnder) {
  var total = 0;
  for (var x = 0; x < multiplesUnder; x++) {
    if (x % 3 === 0 || x % 5 === 0) {
      total += x;
    }
  };
  return total;
};

window.alert(mathMachine(prompt("This fantastic Math Machine will add ALL the multiples of 3 and all the multiples of 5 (under a certain number) together into one SUPER NUMBER!!! What should that certain number be?", "1000")));