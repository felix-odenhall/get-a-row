import useStore from "../../store/zustandStore";
import { HasBingo, BingoGrid } from "../index";

export const GameBoard = () => {
  const { hasBingo } = useStore((state) => ({
    hasBingo: state.hasBingo,
  }));

  return <>{hasBingo ? <HasBingo /> : <BingoGrid />}</>;
};
