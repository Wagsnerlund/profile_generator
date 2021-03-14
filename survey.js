const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answers = [];

rl.question("What's your name?", (answer) => {
  answers.push(answer);
  rl.question("What's an activity you like doing?", (answer) => {
    answers.push(answer);
    rl.question("What do you listen to while doing that?", (answer) => {
      answers.push(answer);
      rl.question("Which meal is your favourite (ex: dinner, brunch, etc.)?", (answer) => {
        answers.push(answer);
        rl.question("What's your favourite thing to eat for that meal'?", (answer) => {
          answers.push(answer);
          rl.question("Which sport is your favourite?", (answer) => {
            answers.push(answer);
            rl.question("What is something you're amazing at?", (answer) => {
              answers.push(answer);
              rl.close();
              const name = answers[0];
              const activity = answers[1];
              const music = answers[2];
              const meal = answers[3];
              const food = answers[4];
              const sport = answers[5];
              const skill = answers[6];

              console.log('Your profile is ready!!');
              console.log(`${name} loves listening to ${music} while ${activity}, devouring ${food} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${skill}.`);
            });
          });
        });
      });
    });
  });
});

//  Devani loves listening to Ludovico Einaudi while coding, devouring Yak Momos for brunch, prefers Tennis over any other sport, and is amazing at dropping mad puns at inopportune times.