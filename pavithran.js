// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
let N = [];

inp.on("line", (data) => {
    
   N.push(Number(data)); // Input data process here
    
});

inp.on("close", () => {

    // Output data process here
    
console.log(N);
});