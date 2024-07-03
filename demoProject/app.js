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
