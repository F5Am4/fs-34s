const fs = require("fs");

let read = fs.readFileSync("nuevo_archivo.txt", "utf8");
console.log(read);