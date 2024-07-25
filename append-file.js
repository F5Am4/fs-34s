const fs = require('fs')

let appendFile = fs.appendFileSync('nuevo_archivo.txt', '. Segunda linea de texto', 'utf-8')