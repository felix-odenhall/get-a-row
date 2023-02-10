import { Box, Container, Grid, Text } from "@chakra-ui/react";
import { useState } from "react";
import { lines3x3 } from "../../constants/gameBoards";
import { calculateWinner } from "../../utils/winningCondition";
import useStore from "../../store/zustandStore";

export const BingoGrid = () => {
  const { username, setHasBingo, setLastCompletedTask, pickedTasks } = useStore(
    (state) => ({
      username: state.username,
      hasBingo: state.hasBingo,
      setHasBingo: state.setHasBingo,
      setLastCompletedTask: state.setLastCompletedTask,
      pickedTasks: state.pickedTasks,
    })
  );

  const [boardSize] = useState(lines3x3);

  const handleClick = (item: { id: number }) => {
    pickedTasks.map((task) => {
      if (task.id === item.id) {
        task.isComplete = !task.isComplete;
        setLastCompletedTask(task.task);
      }
      const result = calculateWinner(pickedTasks, boardSize);
      if (result) {
        setTimeout(() => {
          setHasBingo(true);
          setLastCompletedTask("");
        }, 200);
      }

      return task;
    });
  };

  return (
    <Container
      h="95vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Text as="h2" fontSize="2xl" fontWeight="extrabold">
        {username}'s Game board
      </Text>
      <Grid
        w="100%"
        p="2"
        maxW="480px"
        mb="8"
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
    </Container>
  );
};
