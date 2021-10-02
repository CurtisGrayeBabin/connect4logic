
// get a new game board
const newBoard = (row,cols) => {
    if(!row || !cols) [row,cols]=[6,7];
    return Array(row).fill('').map(x => Array(cols).fill(''))
}


// fill a gameboard with random player1 and player2 moves
const randomFill = (gameboard,player1,player2) => {
    if(!gameboard) return null;

    if(!player1 || !player2){
        [player1,player2]=['1','2'];
    }

    const choices=[player1,player2];

    for(let row=0; row<gameboard.length; row++){
        for(let col=0; col<gameboard[0].length; col++){
            gameboard[row][col] = choices[Math.floor(Math.random()*choices.length)];
        }
    }

    return gameboard;
}


// print row by row, space by space
const prettyPrint = (gameboard) => {

    console.log();
    gameboard.forEach(row => {
        console.log(...row);
    });
    console.log();

}

// check if the last move caused a winning condition
const isWinner = (gameboard, lastRowPlaced, lastColumnPlaced, requiredWinLength) => {
    return true;
}

export default newBoard;
export { prettyPrint, randomFill, isWinner }