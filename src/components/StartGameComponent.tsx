import useStore from "../zustandStore";
import { Box, Button, Text } from "@chakra-ui/react";
import SelectTasks from "./SelectTasks";

function StartGameComponent() {
  const {
    setHasOngoingGame,
    username,
    bingoTasks,
    setBingoTasks,
    shuffleArr,
    pickedTasks,
  } = useStore((state) => ({
    username: state.username,
    setHasOngoingGame: state.setHasOngoingGame,
    bingoTasks: state.bingoTasks,
    setBingoTasks: state.setBingoTasks,
    shuffleArr: state.shuffleArr,
    pickedTasks: state.pickedTasks,
  }));

  const startGame = () => {
    setHasOngoingGame(true);
    setBingoTasks(shuffleArr(bingoTasks));
    pickedTasks.map((item) => {
      item.isComplete = false;
      return item;
    });
  };

  const calcAmountOfTasksFn = () => {
    if (pickedTasks.length === 0) {
      return (
        <Text color="tomato" fontSize="2xl" fontWeight="bold">
          Select 9 Tasks
        </Text>
      );
    } else if (pickedTasks.length === 9) {
      return (
        <Button
          colorScheme="orange"
          size="md"
          bgGradient="linear(to-b, orange.400, tomato)"
          fontWeight="bold"
          fontSize="xl"
          onClick={startGame}
          boxShadow="base"
        >
          Let's Play
        </Button>
      );
    } else {
      return (
        <Text color="tomato" fontSize="2xl" fontWeight="bold">
          Select {9 - pickedTasks.length} more tasks
        </Text>
      );
    }
  };

  const calcAmountOfTasks = calcAmountOfTasksFn();

  return (
    <>
      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="2rem"
        fontWeight="bold"
      >
        Welome {username}
      </Text>
      <Box w="100%" my={2} h="12">
        {calcAmountOfTasks}
      </Box>
      <SelectTasks />
    </>
  );
}

export default StartGameComponent;
