import { Button, ListItem, UnorderedList } from "@chakra-ui/react";
import useStore, { BingoData } from "../../store/zustandStore";

export const SelectTasks = () => {
  const { bingoTasks, pickedTasks, setPickedTasks } = useStore((state) => ({
    bingoTasks: state.bingoTasks,
    pickedTasks: state.pickedTasks,
    setPickedTasks: state.setPickedTasks,
  }));

  const handleClick = (item: BingoData) => {
    pickedTasks.length < 9 && !pickedTasks.includes(item)
      ? setPickedTasks([...pickedTasks, item])
      : setPickedTasks(pickedTasks.filter((e) => e !== item));
  };

  const itemsList = bingoTasks.map((item) => {
    return (
      <ListItem key={item.id} textAlign="center">
        <Button
          bg={pickedTasks.includes(item) ? "green" : "white"}
          color={pickedTasks.includes(item) ? "white" : "black"}
          p="5"
          my="1.5"
          w="95%"
          border="1px"
          borderColor="black"
          borderRadius="2xl"
          fontWeight="semibold"
          fontSize="md"
          boxShadow="0 2px 0 0.5px rgba(0, 0, 0, 1)"
          onClick={() => handleClick(item)}
          data-cy="pickTaskButton"
          transition="all .1s ease"
          _active={{ transform: "translateY(0.5px)", boxShadow: "none" }}
          _hover={{
            transform: "scale(2px)",
          }}
        >
          {item.task}
        </Button>
      </ListItem>
    );
  });

  return (
    <>
      <UnorderedList
        listStyleType="none"
        mx="auto"
        mt="32"
        mb="10"
        justifyContent="center"
        px="1"
        data-cy="pickTaskList"
        maxW="768px"
        display="flex"
        flexDirection="column"
      >
        {itemsList}
      </UnorderedList>
    </>
  );
};
