let insult = {
    adjective1: ["bald", "horrible", "terrible", "silly", "dumb"],
    adjective2: ["gawdy", "foolish", "ugly", "high calorie", "grotesque"],
    noun: ["clown", "sponge", "fool", "MT. Rushmore", "your"],
}




//console.log('Do you want to hear an insult?');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

// readline.question('What is your name?', name => {
//     console.log(`Hello, ${name}!`);
//     readline.close();
//   });

readline.question(console.log('Do you want to hear an insult?')), answer => {
    readline.on('line', (input) => {
        console.log(`Received: ${input}`);
      }); 
      answer = input;
    if (answer === 'yes' || answer === 'y') {
        console.log(insult);
    } else if(answer === 'no' || answer === 'n') {
        console.log('Goodbye!');
        readline.close();
    } else {
        console.log('Please answer yes or no.');
    }
    
}

// readline.on('line', (input) => {
//     console.log(`Received: ${input}`);
//   }); 

