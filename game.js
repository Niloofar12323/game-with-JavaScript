const readlineSync = require('readline-sync');

// Game Variables
let health = 100;
let inventory = [];
let mazePosition = 1;
let fellowExplorers = ['Alice', 'Bob', 'Charlie'];
let mafia = fellowExplorers[Math.floor(Math.random() * fellowExplorers.length)];
let suspicion = { 'Alice': 0, 'Bob': 0, 'Charlie': 0 };

// Function to generate a random card
function getRandomCard() {
    return Math.floor(Math.random() * 10) + 1;
}

// Function to display ASCII health bar
function displayHealth() {
    let healthBar = "❤".repeat(Math.max(0, health / 10));
    console.log(`Health Status: ${healthBar} ${health}/100`);
}

// Function to navigate through the maze
function exploreMaze() {
    console.log(`
        .--.
      .'_\/_'.
      '. /\ .'
        "||"
          ||
    `);
    console.log("\nYou are in a dark maze with many twists and turns.");

    const directions = ['north', 'south', 'east', 'west'];
    let move = readlineSync.question("Which direction do you want to go? (north/south/east/west): ");

    if (directions.includes(move)) {
        console.log(`You move ${move}.`);
        mazePosition++;

        const event = Math.random();

        if (event < 0.2) {
            encounterPuzzle();
        } else if (event < 0.4) {
            encounterRoulette();
        } else if (event < 0.6) {
            encounterMafia();
        } else {
            encounterPoker();
        }
    } else {
        console.log("Invalid direction. Try again.");
        exploreMaze();
    }

    displayHealth();
    checkHealth();
}

// Function to handle puzzles
function encounterPuzzle() {
    console.log(`
       _______
      |       |
      | LOCKED|
      | DOOR  |
      |_______|
    `);
    console.log("You encounter a locked door with a strange inscription. It reads:");

    const puzzleOptions = [
        {
            question: "1, 1, 2, 3, 5, 8, 13, 21, ?. What is the next number in the sequence?",
            correctAnswer: "34",
            clue: "This is the Fibonacci sequence."
        },
        {
            question: "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?",
            correctAnswer: "echo",
            clue: "Think of sound and how it reflects."
        },
        {
            question: "The more you take, the more you leave behind. What am I?",
            correctAnswer: "footsteps",
            clue: "Think about movement and what's left in your path."
        }
    ];

    let puzzle = puzzleOptions[Math.floor(Math.random() * puzzleOptions.length)];
    console.log(puzzle.question);
    let answer = readlineSync.question("Enter your answer: ").toLowerCase();

    if (answer === puzzle.correctAnswer) {
        console.log("Correct! You solved the puzzle and the door unlocks.");
        inventory.push('key');
    } else {
        console.log("Incorrect. You lose 15 health points.");
        console.log(`Hint: ${puzzle.clue}`);
        health -= 15;
    }
}

// Function for the Roulette of Fate
function encounterRoulette() {
    console.log(`
    \\   |   /
      \\ | /
       --O--    << ROULETTE OF FATE >>
      / | \\
    /   |   \\
    `);
    console.log("\nYou encounter the mysterious 'Roulette of Fate'. You must spin it!");
    const outcomes = ['gain 20 health', 'lose 15 health', 'get a map', 'lose your key', 'nothing happens'];
    const result = outcomes[Math.floor(Math.random() * outcomes.length)];

    console.log(`The roulette spins... and you ${result}.`);

    if (result === 'gain 20 health') health += 20;
    if (result === 'lose 15 health') health -= 15;
    if (result === 'get a map') inventory.push('map');
    if (result === 'lose your key' && inventory.includes('key')) inventory = inventory.filter(item => item !== 'key');
}

// Function to encounter Mafia
function encounterMafia() {
    console.log(`
        .-"-.     
       _/.-.-.\\_   
      ( ( o o ) )  
       |/  "  \\|
        \\  -  /
       __/ - \\__
      (_/      \\_)
      
    Beware... One of them is the Mafia!
    `);

    let explorer = fellowExplorers[Math.floor(Math.random() * fellowExplorers.length)];
    console.log(`${explorer} says something suspicious...`);
    suspicion[explorer]++;

    const accuse = readlineSync.question("Do you think this person is the mafia? (yes/no): ").toLowerCase();

    if (accuse === 'yes') {
        if (explorer === mafia) {
            console.log(`You were right! ${explorer} was the Mafia. You stop them from sabotaging you!`);
            fellowExplorers = fellowExplorers.filter(e => e !== mafia);
        } else {
            console.log(`Wrong! ${explorer} was not the Mafia.`);
            health -= 10;
        }
    }
}

// Function to handle Poker game
function encounterPoker() {
    console.log(`
        _______
       |A      |
       |   /\\  |
       |  /  \\ |
       | (   ) |
       |___\\/__|

           POKER TIME!
    `);
    console.log("They challenge you to a game of Poker.");

    let playerHand = [getRandomCard(), getRandomCard()];
    let dealerHand = [getRandomCard(), getRandomCard()];

    console.log(`\nYour hand: ${playerHand.join(", ")}`);
    console.log("You play your cards...");

    const playerSum = playerHand.reduce((sum, card) => sum + card, 0);
    const dealerSum = dealerHand.reduce((sum, card) => sum + card, 0);

    console.log(`\nYour total: ${playerSum}`);
    console.log(`Dealer's total: ${dealerSum}`);

    if (playerSum > dealerSum) {
        console.log("You win the poker game! You gain 15 health and a special item.");
        health += 15;
        inventory.push('special item');
    } else if (playerSum < dealerSum) {
        console.log("You lose the poker game. You lose 20 health.");
        health -= 20;
    } else {
        console.log("It's a tie! Nothing happens.");
    }
}

// Function to check player's health
function checkHealth() {
    if (health <= 0) {
        console.log("You have lost all your health and failed to escape. Game Over.");
        process.exit();
    } else {
        displayHealth();
    }
}

// Function to play the full game loop
function playGame() {
    console.log(`
*********************************************************
*                                                       *
*         WELCOME TO THE 'LABYRINTH OF LIES'            *
*                                                       *
*********************************************************
               /\\
              /  \\
             /    \\
            /      \\
           /________\\
          |          |
          |   MAZE   |
          |          |
          |__________|
    `);

    while (mazePosition < 10) {
        exploreMaze();

        if (mazePosition >= 10) {
            console.log(`
*******************************
*    CONGRATULATIONS!         *
*    YOU'VE ESCAPED THE       *
*    LABYRINTH OF LIES!       *
*******************************
                /\\
               /  \\
              /    \\
             /      \\
            /________\\
           |          |
           |   HURRAY!|
           |          |
           |__________|
            `);
            break;
        }

        const continueGame = readlineSync.question("Do you want to continue exploring the maze? (yes/no): ").toLowerCase();
        if (continueGame !== 'yes') {
            console.log("You have decided to stop exploring. Game Over.");
            break;
        }
    }

    console.log("Thanks for playing 'Labyrinth of Lies'!");
}

playGame();
