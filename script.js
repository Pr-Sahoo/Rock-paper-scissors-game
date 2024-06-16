document.addEventListener("DOMContentLoaded", () => {
    const choices = ["rock","paper","scissors"];
    const buttons = document.querySelectorAll(".choice");
    let playerScore = 0;
    let computerScore = 0;

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const playerChoice = button.id;
            const computerChoice = choices[Math.floor(Math.random() * choices.length)];
            const result = determineWinner(playerChoice, computerChoice);

            updateResult(result, playerChoice, computerChoice);
            updateResult(result);
        });
    });

    function determineWinner(player, computer) {
        if (player === computer) {
            return "draw";
        }else if (
            (player === "rock" && computer === "scissors") ||
            (player === "paper" && computer === "rock") ||
            (player === "scissors" && computer === "paper")
        ){
            return "player";
        }else {
            return "computer";
        }
    }

    function updateResult(result, playerChoice, computerChoice) {
        const resultText = document.getElementById("resultText");
        if (result === "draw") {
            resultText.textContent = `It's a draw! You Both chose ${playerChoice}.`;
        } else if (result === "player") {
            resultText.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
        } else {
            resultText.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
        }
    }

    function updateResult(result) {
        if (result === "player") {
            playerScore++;
        } else if (result === "computer") {
            computerScore++;
        }
        document.getElementById("playerScore").textContent = playerScore;
        document.getElementById("computerScore").textContent = computerScore;
    }
});
