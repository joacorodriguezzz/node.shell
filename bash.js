// Un prompt como output
let commands = require("./comands");
process.stdout.write("prompt > ");

// El evento STDIN 'data' se dispara cuando el usuario escribe una línea
process.stdin.on("data", function (data) {
  let arreglo = data.toString().trim().split(" ");
  let cmd = arreglo[0]
  let argumentos = arreglo.slice(1)

  // diferentes inputs
  if (cmd === "ls") {
    commands.mostrarArchivos();
  } else if (cmd === "echo") {
    commands.voz(argumentos);
  } else if (cmd === "pwd") {
    commands.ruta();
  } else if (cmd === "date") {
    commands.fecha();
  } else if (cmd === "cat") {
    commands.mostrarContenido(argumentos);
  } else if (cmd === "head") {
    commands.cincoLineas(argumentos);
  } else {
    process.stdout.write("You typed: " + cmd);
    process.stdout.write("\nprompt > ");
  }
});



