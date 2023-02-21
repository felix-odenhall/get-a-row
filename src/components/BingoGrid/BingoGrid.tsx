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
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Text
        as="h2"
        fontSize="2xl"
        fontWeight="extrabold"
        data-cy="usersGameBoardLabel"
        my="4"
        color="black"
      >
        {username}'s game board
      </Text>
      <Grid
        p="2"
        maxW="500px"
        mb="8"
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={1.5}
        data-cy="bingoBoard"
        bg="gray.400"
        borderRadius="xl"
        boxShadow="inset 1px 1px 1px gray"
        border="2px"
      >
        {pickedTasks.length === 9 &&
          pickedTasks.map((el) => {
            return (
              <Box
                bg={el.isComplete ? "green" : "white"}
                color={el.isComplete ? "white" : "black"}
                fontWeight="medium"
                as="button"
                h="28"
                w="28"
                key={el.id}
                p="1"
                userSelect="none"
                onClick={() => handleClick(el)}
                data-cy="bingoTile"
                border="2px"
                borderColor="black"
                borderRadius="xl"
                fontSize="md"
                boxShadow="0 2px 0 0.5px rgba(0, 0, 0, 1)"
                transition="all .1s ease"
                _active={{ transform: "translateY(0.5px)", boxShadow: "none" }}
                _hover={{
                  transform: "scale(2px)",
                }}
              >
                {el.task}
              </Box>
            );
          })}
      </Grid>
    </Container>
  );
};
