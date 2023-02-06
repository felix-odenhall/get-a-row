import { Box, Button, Grid } from "@chakra-ui/react";
import { useState } from "react";
import { lines3x3 } from "../../constants/gameBoards";
import { calculateWinner } from "../../utils/winningCondition";
import useStore from "../../store/zustandStore";

export const BingoGrid = () => {
  const {
    setHasBingo,
    setLastCompletedTask,
    pickedTasks,
    setPickedTasks,
    setHasOngoingGame,
  } = useStore((state) => ({
    username: state.username,
    hasBingo: state.hasBingo,
    setHasBingo: state.setHasBingo,
    setLastCompletedTask: state.setLastCompletedTask,
    pickedTasks: state.pickedTasks,
    setPickedTasks: state.setPickedTasks,
    setHasOngoingGame: state.setHasOngoingGame,
  }));

  const [boardSize] = useState(lines3x3);

  const handleClick = (item: { id: number }) => {
    pickedTasks.map((task) => {
      if (task.id === item.id) {
        task.isComplete = !task.isComplete;
        setLastCompletedTask(task.task);
      }
      const result = calculateWinner(pickedTasks, boardSize);
      if (result) {
        setHasBingo(true);
        setLastCompletedTask("");
      }

      return task;
    });
  };

  const pickNewTasks = () => {
    setHasOngoingGame(false);
    setPickedTasks([]);
    setLastCompletedTask("");
  };

  return (
    <>
      <Grid
        w="100%"
        p="2"
        maxW="480px"
        m="auto"
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={1.5}
      >
        {pickedTasks.length === 9 &&
          pickedTasks.map((el) => {
            return (
              <Box
                bg={el.isComplete ? "green.400" : "gray.200"}
                color={el.isComplete ? "white" : "black"}
                fontWeight="medium"
                as="button"
                h="36"
                key={el.id}
                p="1"
                boxShadow="base"
                onClick={() => handleClick(el)}
              >
                {el.task}
              </Box>
            );
          })}
      </Grid>
      <Button
        colorScheme="orange"
        size="md"
        bgGradient="linear(to-b, orange.400, tomato)"
        fontWeight="medium"
        fontSize="lg"
        onClick={pickNewTasks}
        boxShadow="base"
        mb="2"
      >
        Pick New Tasks
      </Button>
    </>
  );
};
