const options = {
  name: "mithu",
  org: "PUST",
  add: "pabna",
};

for (key in options) {
  console.log(key);
  console.log(options[key]);
}

//! Counting every character in the string....
const str = "la ilaha illallahu muhammadur rasulullah";

let count = {};

for (let x of str) {
  if (count[x]) {
    count[x] += 1;
  } else {
    count[x] = 1;
  }
}
console.log(count);

//! Spread Operator...

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let combinedArr = [...arr1, ...arr2];
console.log(combinedArr);

//! Array Destructuring...

let book = ["Advance JS", 200, 150];

let [title, price, copies] = book;

console.log(title, price, copies);

function books() {
  //? do something...
  return ["Advance JS", 500, 200];
}

let [book_title, page, prices] = books();
console.log(book_title, page, prices);

//! Object Destructuring...

let person = {
  name: "John",
  age: 30,
  city: "New York",
};

let { name: nam, age, city } = person;

console.log(nam, age, city);
