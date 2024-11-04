# **Labyrinth of Lies**

*Labyrinth of Lies* is a text-based adventure game where you navigate through a dark maze filled with puzzles, dangerous encounters, and a hidden traitor.  
**Objective**: Successfully traverse the labyrinth and uncover the mafia member among your companions.

---

## **Game Mechanics:**
1. **Maze Exploration:**  
   Navigate through a **maze** and encounter random events like **puzzles**, **gambling**, **poker**, and interactions with your **fellow explorers**.

   - **Puzzles (Escape Room Mechanics):**  
     Solve **intellectual challenges** to unlock doors and receive rewards like **keys** or **items**.

   - **Gambling (Roulette of Fate):**  
     Spin a **roulette wheel** that determines positive or negative outcomes, affecting **health** or your **inventory**.

   - **Mafia Encounters:**  
     Among your fellow explorers (**Alice, Bob, Charlie**) one is secretly a **mafia member**. You must deduce who it is by observing **suspicious behavior**.

   - **Poker:**  
     Play a **poker mini-game** against a dealer, where the stakes are either **health** or **valuable items**.

---

## **Installation and Execution:**
1. **Prerequisites:**  
   Install **Node.js** from [nodejs.org](https://nodejs.org).

2. **Installation Steps:**  
   - Clone the repository or download the game files.
   - Navigate to the game’s directory in your **terminal**.
   - Run `node labyrinth_of_lies.js` to start the game.

---

## **Gameplay Overview:**
1. **Maze Exploration:**  
   Explore a **dark maze** by choosing a direction — **north, south, east, or west**. Each move may trigger random events:
   - **Puzzles:** Answer **riddles** and **logic problems**. Correct answers reward you with **keys**, incorrect answers **reduce your health**.
   - **Roulette of Fate:** Spin the roulette and experience **random outcomes**, like gaining or losing **health** or **items**.
   - **Mafia Encounters:** You’ll face one of your fellow explorers who may **raise suspicion**. Decide if they are the **mafia**.
   - **Poker:** Win a poker game to receive **health** or **items**, but lose and you lose **health**.

2. **Inventory and Items:**  
   Collect useful **items** like keys, maps, and special objects that help in navigating the maze or overcoming challenges.

3. **Mafia Mechanic (Social Deduction):**  
   One of your fellow explorers is the **mafia**. **Correctly accuse** them, and they’ll be removed from the game. **False accusations** result in **health loss**.

4. **Health System:**  
   You start with **100 health points**. Various events reduce your health; if it reaches **zero**, the game ends.

5. **Winning the Game:**  
   - Escape by reaching **position 10** in the maze.
   - Correctly identify and neutralize the **mafia**.

---

## **Code Overview**

### **Key Functions:**
- `exploreMaze()`: Handles maze exploration and triggers random events (puzzles, mafia encounters, poker, or roulette).
- `encounterPuzzle()`: Manages puzzles by presenting riddles and awarding items for correct answers, reducing health for wrong answers.
- `encounterRoulette()`: Simulates the gambling event, generating random outcomes that affect health or inventory.
- `encounterMafia()`: Runs the social deduction event, where you must decide whether to accuse a fellow explorer of being the mafia.
- `encounterPoker()`: Executes the poker mini-game, with health and items at stake.
- `checkHealth()`: Monitors the player's health and ends the game if it drops to zero.

---

## **Variables and Game States**
- `health`: Player's life points; gain or lose health based on events.
- `inventory`: A list of items the player collects.
- `mazePosition`: Tracks progress in the maze, reaching position 10 ends the game.
- `fellowExplorers`: List of companions, one of whom is randomly assigned as the mafia.
- `suspicion`: Tracks how suspicious each explorer behaves.

---

## **How Events Work:**
- **Puzzle Events:** Solve puzzles to unlock rewards or suffer health penalties.
- **Roulette Events:** Spin the "Roulette of Fate" to gamble for health or items.
- **Mafia Encounters:** Face fellow explorers, identify suspicious behavior, and decide whether to accuse someone of being the mafia.
- **Poker Events:** Play poker against a dealer to win or lose health and items.

---

## **Contributors**
This game was developed as a creative exercise to combine **social deduction**, **puzzle-solving**, and **mini-games** into a single text-based adventure.

---

## **License**
This project is licensed under the **MIT License**.
