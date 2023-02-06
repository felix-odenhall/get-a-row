import { Button } from "@chakra-ui/react";
import useStore from "../../store/zustandStore";

export const HasBingo = () => {
  const {
    setHasBingo,
    setLastCompletedTask,
    shuffleArr,
    pickedTasks,
    setPickedTasks,
  } = useStore((state) => ({
    setHasBingo: state.setHasBingo,
    setLastCompletedTask: state.setLastCompletedTask,
    shuffleArr: state.shuffleArr,
    pickedTasks: state.pickedTasks,
    setPickedTasks: state.setPickedTasks,
  }));
  const restartFn = () => {
    setHasBingo(false);
    setLastCompletedTask("");
    pickedTasks.map((el) => {
      el.isComplete = false;
      return el;
    });
    setPickedTasks(shuffleArr(pickedTasks));
  };
  return (
    <>
      <h1>BINGO</h1>
      <Button
        colorScheme="orange"
        size="md"
        bgGradient="linear(to-b, orange.400, tomato)"
        fontWeight="medium"
        fontSize="lg"
        onClick={restartFn}
        boxShadow="base"
        mb="2"
      >
        Restart
      </Button>
    </>
  );
};
