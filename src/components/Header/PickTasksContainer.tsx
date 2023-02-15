import { Box, Button } from "@chakra-ui/react";
import useStore from "../../store/zustandStore";
import SelectAmountOfTasks from "./SelectAmountOfTasks";

const PickTasksContainer = () => {
  const {
    setHasOngoingGame,
    bingoTasks,
    setBingoTasks,
    pickedTasks,
    shuffleArr,
  } = useStore((state) => ({
    setHasOngoingGame: state.setHasOngoingGame,
    bingoTasks: state.bingoTasks,
    setBingoTasks: state.setBingoTasks,
    pickedTasks: state.pickedTasks,
    shuffleArr: state.shuffleArr,
  }));

  const startGame = () => {
    setHasOngoingGame(true);
    setBingoTasks(shuffleArr(bingoTasks));
    pickedTasks.map((item) => {
      item.isComplete = false;
      return item;
    });
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      w="100%"
      h="6vh"
      bg="gray.700"
      justifyContent="center"
      shadow="sm"
      data-cy="pickTasksContainer"
    >
      {pickedTasks.length === 9 ? (
        <Button
          colorScheme="orange"
          size="md"
          bgGradient="linear(to-b, orange.400, tomato)"
          fontWeight="bold"
          fontSize="xl"
          onClick={startGame}
          boxShadow="base"
          data-cy="startGameButton"
        >
          Start game
        </Button>
      ) : (
        <SelectAmountOfTasks
          inputText={
            pickedTasks.length === 0
              ? "Pick 9 tasks"
              : `Pick ${9 - pickedTasks.length} more tasks`
          }
        />
      )}
    </Box>
  );
};

export default PickTasksContainer;
