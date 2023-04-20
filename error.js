// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

let a;


inp.on("line", (data) => {
    
    // Input data process here
a = data;

});

inp.on("close", () => {
let b=[]; 
b.push(a/2);



console.log(b.concat(b).join(""));
});


