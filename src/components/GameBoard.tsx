import { Box, Button, Grid, Text, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { lines3x3 } from "../utils/gameBoards";
import { calculateWinner } from "../utils/winningCondition";
import useStore from "../zustandStore";

function GameBoard() {
  const {
    username,
    hasBingo,
    setHasBingo,
    lastCompletedTask,
    setLastCompletedTask,
    shuffleArr,
    pickedTasks,
    setPickedTasks,
    setHasOngoingGame,
    bingoTasks,
  } = useStore((state) => ({
    username: state.username,
    hasBingo: state.hasBingo,
    setHasBingo: state.setHasBingo,
    lastCompletedTask: state.lastCompletedTask,
    setLastCompletedTask: state.setLastCompletedTask,
    shuffleArr: state.shuffleArr,
    pickedTasks: state.pickedTasks,
    setPickedTasks: state.setPickedTasks,
    setHasOngoingGame: state.setHasOngoingGame,
    bingoTasks: state.bingoTasks,
  }));

  <Box w="100%" h="20">
    {lastCompletedTask !== "" && (
      <Text color="tomato" fontSize="2xl" fontWeight="bold">
        {username} just completed the task: {lastCompletedTask}
      </Text>
    )}
  </Box>;

  // const bingoBoard = pickedTasks;
  const [boardSize, setBoardSize] = useState(lines3x3);
  const toast = useToast();

  const handleClick = (item: { id: number }) => {
    pickedTasks.map((task) => {
      if (task.id === item.id) {
        task.isComplete = !task.isComplete;
        task.isComplete &&
          toast({
            position: "bottom",
            duration: 2000,
            isClosable: true,
            render: () => (
              <Box borderRadius="xl" bg="green.400" p="4">
                <Text color="white" fontSize="xl" fontWeight="bold">
                  You just completed the task: {task.task}
                </Text>
              </Box>
            ),
          });
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

  const canPlayFn = () => {
    if (pickedTasks.length === 9) {
      return pickedTasks.map((el) => {
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
      });
    }
  };

  const canPlay = canPlayFn();

  const pickNewTasks = () => {
    setHasOngoingGame(false);
    setPickedTasks([]);
    setLastCompletedTask("");
  };

  const restartFn = () => {
    setHasBingo(false);
    setLastCompletedTask("");
    pickedTasks.map((item) => {
      item.isComplete = false;
      return item;
    });
    setPickedTasks(shuffleArr(pickedTasks));
  };

  return (
    <>
      <h2>{username}'s Game board</h2>
      {hasBingo ? (
        <h1>BINGO</h1>
      ) : (
        <Grid
          w="100%"
          p="2"
          templateRows="repeat(3, 1fr)"
          templateColumns="repeat(3, 1fr)"
          gap={1.5}
        >
          {canPlay}
        </Grid>
      )}

      {hasBingo ? (
        <div>
          <button onClick={() => restartFn()}>Restart</button>
        </div>
      ) : (
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
      )}
    </>
  );
}

export default GameBoard;
