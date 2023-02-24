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
  const restartGame = () => {
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
        bg="#FF7200"
        py="6"
        my="1.5"
        border="2px"
        borderColor="black"
        borderRadius="2xl"
        fontWeight="semibold"
        color="white"
        fontSize="2xl"
        boxShadow="0 2px 0 0.5px rgba(0, 0, 0, 1)"
        onClick={restartGame}
        data-cy="restartGame"
        transition="all .1s ease"
        _active={{ transform: "translateY(0.5px)", boxShadow: "none" }}
        _hover={{
          transform: "scale(2px)",
        }}
      >
        Restart
      </Button>
    </Container>
  );
};
