function generateDice(number) {
    const dotPositions = { //matrix for each dice number and corresponding dot position
        1: [[50, 50]],
        2: [
            [20, 20],
            [80, 80],
        ],
        3: [
            [20, 20],
            [50, 50],
            [80, 80],
        ],
        4: [
            [20, 20],
            [20, 80],
            [80, 20],
            [80, 80],
        ],
        5: [
            [20, 20],
            [20, 80],
            [50, 50],
            [80, 20],
            [80, 80],
        ],
        6: [
            [20, 20],
            [20, 80],
            [50, 20],
            [50, 80],
            [80, 20],
            [80, 80],
        ],
    };

    const dice = document.createElement("div");
    dice.classList.add("dice"); //assigns dice class

    for (const [top, left] of dotPositions[number]) { //loops through the dot positions and creates the dots
        const dot = document.createElement("div");
        dot.classList.add("dice-dot");
        dot.style.setProperty("--top", `${top}%`);
        dot.style.setProperty("--left", `${left}%`);
        dice.appendChild(dot);
    }

    return dice;
}

function rollDice(diceContainer, numberOfDice) { 
    diceContainer.innerHTML = ""; //clears the dice container

    for (let i = 0; i < numberOfDice; i++) {
        const randomNumber = Math.floor(Math.random() * 6) + 1; //random number from 1 to 6 
        const dice = generateDice(randomNumber); //creates dice 
        diceContainer.appendChild(dice); //adds dice to container 
    }
}

const diceContainer = document.querySelector(".dice-container");
const rollButton = document.querySelector(".btn-roll-dice");
const numberOfDice = 2; // number of dice to roll


rollDice(diceContainer, numberOfDice); // rolls dice when pages loads 


rollButton.addEventListener("click", () => { //rolls dice when button is clicked
    rollDice(diceContainer, numberOfDice);
});