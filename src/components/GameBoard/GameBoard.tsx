import { Box } from "@chakra-ui/react";
import useStore from "../../store/zustandStore";
import { HasBingo, BingoGrid } from "../index";

export const GameBoard = () => {
  const { hasBingo } = useStore((state) => ({
    hasBingo: state.hasBingo,
  }));

  return (
    <Box w="100%" h="100vh" bg={!hasBingo ? "#00CBFE" : "white"} p="2">
      {hasBingo ? <HasBingo /> : <BingoGrid />}
    </Box>
  );
};
