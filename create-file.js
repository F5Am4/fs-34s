// const fs = require('node: fs')También es valido usar 'fs' así.
const fs = require('fs')

fs.writeFileSync('nuevo_archivo.txt', 'contenido del archivo', { encoding: 'utf-8'})//Creamos un archivo en la carpeta donde estamos
// fs.writeFileSync('nuevo_archivo.txt', 'contenido del archivo', 'utf-8')//Este también es valido y hace lo mismo, como una cadena de texto.
