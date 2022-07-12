//#1
console.log("Q1: ------------------");

let sum = 0;

for (let i = 1; i <= 20; i++) {
  sum += i;
}

console.log(sum);

//#2
console.log("Q2: ------------------");

for (let i = 1; i <= 1; i++) {
  console.log(`There is ${i} bottle of beer on the table`);
  for (let j = 2; j <= 5; j++) {
    console.log(`There are ${j} bottles of beer on the table`);
  }
}

//#3
console.log("Q3: ------------------");

for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
}

//#4
console.log("Q4: ------------------");

for (let i = 0; i <= 10; i++) {
  console.log(`${i} * 9 = ${i * 9}`);
}

//#5

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`FizzBuzz ${i}`);
  } else if (i % 3 === 0) {
    console.log(`Fizz ${i}`);
  } else if (i % 5 === 0) {
    console.log(`Buzz ${i}`);
  }
}

//#6
let total = 0;

for (let i = 1; i < 1000; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    total += i;
  }
}

console.log(total);

//#7
console.log("---------------------------");
for (let i = 100; i <= 1000; i += 100) {
  console.log("Q7.1:", i);
}

console.log("---------------------------");

for (let i = 0; i <= 10; i += 2) {
  console.log("Q7.2", i);
}

console.log("---------------------------");

for (let i = 3; i <= 15; i += 3) {
  console.log("Q7.3", i);
}

console.log("---------------------------");

for (let i = 9; i >= 0; i--) {
  console.log("Q7.4", i);
}

console.log("---------------------------");

for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <= 4; j++) {
    console.log(i);
  }
}

console.log("---------------------------");

for (let i = 12734; i <= 12738; i++) {
  for (let j = 0; j <= 4; j++) {
    console.log(j);
  }
}

//# 8

console.log("---------------------------");

const palindrome = "tarrattarrat";

const paliArr = palindrome.split("");

const reversePalindrome = paliArr.reverse().join("");

if (palindrome === reversePalindrome) {
  console.log("The word is a palindrome");
} else {
  console.log("The word is unfortunatley not a palindrome");
}
