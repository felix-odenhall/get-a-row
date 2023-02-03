import useStore from "../zustandStore";
import BingoGrid from "./BingoGrid";
import HasBingo from "./HasBingo";

function GameBoard() {
  const { username, hasBingo } = useStore((state) => ({
    username: state.username,
    hasBingo: state.hasBingo,
  }));

  return (
    <>
      <h2>{username}'s Game board</h2>
      {hasBingo ? <HasBingo /> : <BingoGrid />}
    </>
  );
}

export default GameBoard;
