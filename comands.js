function ruta() {
  process.stdout.write(process.cwd() + "\n");
  process.stdout.write("prompt > ");
}


function fecha() {
  process.stdout.write(new Date().toString() + "\n");
  process.stdout.write("prompt > ");
}


const fs = require("fs");
function mostrarArchivos() {
  fs.readdir(".", function (err, files) {
    if (err) throw err;
    files.forEach(function (file) {
      process.stdout.write(file.toString() + "\n");
    });
    process.stdout.write("prompt > ");
  });
}


function voz (arreglo) {
  process.stdout.write(arreglo.join(" ") + "\n");
  process.stdout.write("prompt > ")
}


function mostrarContenido (parametro) {
  let nombreArchivo = parametro.join(" ")
  if (parametro.length>1) {
    for (let i = 0; i < parametro.length; i++) {
      nombreArchivo = parametro[i].toString()
      process.stdout.write(fs.readFileSync(nombreArchivo) + "\n" + nombreArchivo + "\n")
    }
  } else {
    process.stdout.write(fs.readFileSync(nombreArchivo) + "\n")
  }
  process.stdout.write("prompt > ")
} 


function cincoLineas (parametro) {
  let nombreArchivo = parametro.join(" ")
  let content = fs.readFileSync(nombreArchivo)
  console.log(content[0]);
  process.stdout.write("prompt > ")
}
cincoLineas(["archivo2.txt"])

module.exports = {ruta, fecha, mostrarArchivos, voz, mostrarContenido, cincoLineas};

