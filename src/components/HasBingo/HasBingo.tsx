import { Button, Container } from "@chakra-ui/react";
import useStore from "../../store/zustandStore";
import { BingoAnimation } from "../index";

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
    <Container
      h="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <BingoAnimation />
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
    </Container>
  );
};
