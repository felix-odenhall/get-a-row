import useStore from "../../store/zustandStore";
import { Box, Button, Text } from "@chakra-ui/react";
import { SelectTasks } from "../index";
import SelectAmountOfTasks from "./SelectAmountOfTasks";

export const StartGame = () => {
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

  return (
    <section>
      <Box
        pos="fixed"
        w="100%"
        top="0"
        bg="white"
        zIndex={2}
        shadow="base"
        p="2"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Text color="gray.600" fontSize="2rem" fontWeight="bold">
          Welome {username}
        </Text>
        {pickedTasks.length === 9 ? (
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
        ) : (
          <SelectAmountOfTasks
            inputText={
              pickedTasks.length === 0
                ? "Select 9 Tasks"
                : `Select ${9 - pickedTasks.length} more tasks`
            }
          />
        )}
      </Box>
      <Box py="28">
        <SelectTasks />
      </Box>
    </section>
  );
};
