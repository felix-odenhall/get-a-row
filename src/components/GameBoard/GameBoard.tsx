import useStore from "../../store/zustandStore";
import { HasBingo, BingoGrid } from "../index";

export const GameBoard = () => {
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
};
