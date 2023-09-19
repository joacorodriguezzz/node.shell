// Un prompt como output
let commands = require ("./comands")

process.stdout.write('prompt > ');

// El evento STDIN 'data' se dispara cuando el usuario escribe una línea
process.stdin.on('data', function (data) {
  let cmd = data.toString().trim(); // Remueve la nueva línea

} if (cmd === "echo"){
    commands.voz()
} else{
  process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');
}
 
); 