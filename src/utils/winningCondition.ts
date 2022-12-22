import { BingoData } from "../zustandStore";

export function calculateWinner(
  bingoBoard: BingoData[],
  winningConditions: number[][]
) {
  for (let i = 0; i < winningConditions.length; i++) {
    if (winningConditions[0].length === 3) {
      const [a, b, c] = winningConditions[i];
      if (
        bingoBoard[a].isComplete &&
        bingoBoard[b].isComplete &&
        bingoBoard[c].isComplete
      ) {
        return true;
      }
    }
    if (winningConditions[0].length === 4) {
      const [a, b, c, d] = winningConditions[i];
      if (
        bingoBoard[a].isComplete &&
        bingoBoard[b].isComplete &&
        bingoBoard[c].isComplete &&
        bingoBoard[d].isComplete
      ) {
        return true;
      }
    }
  }
}
