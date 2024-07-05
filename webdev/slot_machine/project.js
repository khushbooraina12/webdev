// 1. deposite some money
// 2. determine the no of lines to bet one
// 3. collect a bet amount
// 4. spin the slot machine
// 5. check if the user won
// 6. give the user their winnings
// 7. play again

const prompt = require("prompt-sync");

const deposit = () => {
    const depositAmount = prompt("Enter a deposite amount: ");
    const numberDepositAmount = parseFloat(depositAmount);
};

deposit();