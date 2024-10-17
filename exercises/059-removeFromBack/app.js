function removeFromBack(arr) {
    // your code here
    return arr.slice(arr.length-1)
}

let output = removeFromBack([1, 2, 3]);
console.log(output); // --> [1, 2]
