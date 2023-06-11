//Q1.
function display() {
  console.log("Answer of Question 1.");
}
display();

//Q2.
var num1 = 3;
var num2 = 4;
let output = document.querySelectorAll("span");

function cal(a, b) {
  return a + b;
}
let addition = cal(num1, num2);
output[0].innerHTML = `=> Sum of ${num1}, ${num2} is ${addition}`;

//Q3.
var multiply = (v, w) => {
  return v * w;
};
let resultMultiply = multiply(2, 3);
output[1].innerHTML = `Multiply of 2, 3 is ${resultMultiply}`;

// Q4.
var x = 21;
var girl = function () {
  console.log(x);
  var x = 20;
};
girl();

//Q5.
var x = 21;
girl1();
console.log(x);
function girl1() {
  console.log(x);
  var x = 20;
}

//Q6.
var x = 21;
a();
b();

function a() {
  x = 20;
  console.log(x);
}
function b() {
  x = 40;
  console.log(x);
}
//Q7.
function factorial(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact = fact * i;
  }
  return fact;
}
let outputFact = factorial(5);
output[2].innerHTML = `Factorial of 5 is ${outputFact}.`;

// Day2
// Q1.
function FindSum(a, b) {
  return a + b;
}

function DisplayData(data, batch) {
  console.log(`i am from ${data} and My batch is EA${batch}`);
}

DisplayData("PrepBytes", FindSum(10, 9));

//Q3.
var a = 10;
(function () {
  console.log(a);
  var a = 20;
})();

//Q4.
const greet = function (name) {
  return function (m) {
    console.log(`Hi!! ${name}, ${m}`);
  };
};

const greet_message = greet("EA19");
greet_message("Welcome To PrepBytes");

//Q2.
Abc();
const Abc = function () {
  let value = 20;
  console.log(value);
};
