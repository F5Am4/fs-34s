const fs = require("fs");

let read = fs.readFileSync("mi_archivo.txt", "utf8");
console.log(read);