import newBoard from './logic.js'
import { prettyPrint, randomFill } from './logic.js'

const exampleBoard = randomFill(newBoard());

console.log('here in index.js!')
prettyPrint(exampleBoard)