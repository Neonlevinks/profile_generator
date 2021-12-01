const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.write("To cross the valley you see, you must answer these questions, three \n\n", );

setTimeout(() => {
  rl.question("What is your name? ", (name) => {
    rl.write(`${name}, eh? Alright.\n\n`);

    rl.question("What is your quest? ", (quest) => {
      rl.write(`${quest}! Interesting!\n\n`);

      rl.question("What is the air speed velocity of an unladen swallow?", (speed) => {
          rl.write(`Fine, ${name}! You may continue on your quest ${quest}. Your answer of ${speed} amuses me!\n\n`);
          rl.close();
      })
    })
  })
}, 1000);  