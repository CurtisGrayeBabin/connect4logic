import newBoard from './logic.js'
import { prettyPrint, randomFill, isValidMove, isWinner } from './logic.js'

const exampleBoard = randomFill(newBoard());
const newGameBoard = newBoard();
console.log('here in index.js!')
prettyPrint(exampleBoard)

console.log(isValidMove(exampleBoard,1,5))
console.log(isValidMove(newGameBoard,1,5))

newGameBoard[0][2]='1';
newGameBoard[1][2]='1';
newGameBoard[2][2]='1';
newGameBoard[3][2]='1';
prettyPrint(newGameBoard)
console.log(isWinner(newGameBoard,0,2))