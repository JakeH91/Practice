$(document).ready(function(){
  var counter = 0;
  $('button').click(function(){
    var num = $(this).text();
    var $sum = $(".sum");
    
    
    if (num === "AC") {
      counter = 0;
      $sum.empty();
    }
    
    else if (num === "C") {
      if (counter > 0) {
          $sum.empty();
          counter = 0;
      }
      var del;
      var test = $sum.text().slice(-1);
      if (test === " ") {
        del = $sum.text().slice(0, -3);
      }
      else {
        del = $sum.text().slice(0, -1);
      }
      $sum.empty().append(del);
    }
    
    else if (num === "x" || num === "+" || num === "-" || num === "÷" || num === "%"){
      counter = 0;
      var test = $sum.text().slice(-1);
      if (test === "." || test === " " || test == "") {
        return false;
      }
      else {
      $sum.append(" " + num + " ");
      }
    }

    else if (num === ".") {
      if (counter > 0) {
          $sum.empty();
          counter = 0;
          $sum.append(0 + num);
        }
      var test = $sum.text().slice(-1);
      if (test === ".") {
        return false;
      }
      else if (test === " " || test == "") {
        $sum.append(0 + num);
      }
      else {
        $sum.append(num);
      }
    }

    else if (num === "=") {
      counter++;
      $sum.text($sum.text().replace(/x/g, "*"));
      $sum.text($sum.text().replace(/÷/g, "/"));
      $sum.text(eval($sum.text()));
    }

    else {
      if (counter > 0) {
          $sum.empty();
          counter = 0;
        }
      $sum.append(num);
      
    }
    
  });
});

/* PROBLEMS TO FIX!

  1. High numbers exit left of screen
  2. "%" must find percentages, rather than modulus
  3. If a number has a "." in it, it can not have another
  

*/