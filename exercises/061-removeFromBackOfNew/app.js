function removeFromBackOfNew(arr) {
  // your code here
  return arr.slice(arr.length -1)
}

let arr = [1, 2, 3];
let output = removeFromBackOfNew(arr);
console.log(output); // --> [1, 2]
console.log(arr); // --> [1, 2, 3]
