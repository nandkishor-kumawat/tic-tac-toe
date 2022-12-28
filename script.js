let gameState = document.querySelector(".gameState");
let reset = document.querySelector("#reset");
let cells = document.querySelectorAll('.cell');
cells.forEach(cell => cell.addEventListener('click', handleCellClick));

let player = "X";
let gameMoves = ["", "", "", "", "", "", "", "", ""];
let gameOver = false;
let gameWin = false;

const winnings = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

gameState.innerHTML = player + "'s turn";

function handlePlayerChange() {
    player = player === "X" ? "O" : "X";
    gameState.innerHTML = player + "'s turn";
}


function handleCellClick(e) {
    const clickedCell = e.target;
    let i = clickedCell.getAttribute('data-index');
    if (!gameOver && gameMoves[i] == "") {
        clickedCell.innerText = player;
        gameMoves[i] = player;
        checkWinning();
    }
}

function checkWinning() {
    for (let i = 0; i < winnings.length; i++) {
        let a = gameMoves[winnings[i][0]];
        let b = gameMoves[winnings[i][1]];
        let c = gameMoves[winnings[i][2]];
        if (a == "" || b == "" || c == "") continue;

        if (a == b && b == c) {
            gameWin = true;
            break;

        }
    }
    if (gameWin) {
        gameState.innerText = player + " has won 🎉";
        gameOver = true;
        return;
    }
    if (!gameMoves.includes("")) {
        gameState.innerText = "Draw!";
        gameOver = true;
        return;
    }
    handlePlayerChange();
}
reset.addEventListener('click',()=>{
player = "X";
gameMoves = ["", "", "", "", "", "", "", "", ""];
gameOver = false;
gameWin = false;
gameState.innerHTML = player + "'s turn";
cells.forEach(cell => cell.innerHTML = "")
})