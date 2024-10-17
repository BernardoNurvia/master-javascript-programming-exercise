function getAllWords(str) {
    // your code here
   str.legth === 0 ? []: str.split(' ')
}

let output = getAllWords('Radagast the Brown');
console.log(output); // --> ['Radagast', 'the', 'Brown']
