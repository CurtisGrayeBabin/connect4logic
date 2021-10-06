
const EMPTY_SPACE = '';

// get a new game board
const newBoard = (row,cols) => {
    if(!row || !cols) [row,cols]=[6,7];
    return Array(row).fill(EMPTY_SPACE).map(x => Array(cols).fill(EMPTY_SPACE))
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

const isValidMove = (gameboard, row, column) => {
    if(gameboard[row][column]===EMPTY_SPACE) return true;
    return false;
}

// check if the last move caused a winning condition
const isWinner = (gameboard, row, column, requiredWinLength) => {
    if(!column || !row) return false;



    return true;
}

export default newBoard;
export { prettyPrint, randomFill, isValidMove, isWinner }