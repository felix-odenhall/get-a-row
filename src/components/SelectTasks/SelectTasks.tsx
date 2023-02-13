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
      <ListItem>
        <Button
          my="1"
          size="sm"
          colorScheme={pickedTasks.includes(item) ? "green" : "gray"}
          w="100%"
          h="12"
          fontSize="md"
          boxShadow="base"
          key={item.id}
          onClick={() => handleClick(item)}
          data-cy="pickTaskButton"
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
        mb="10"
        justifyContent="center"
        px="1"
        data-cy="pickTaskList"
        maxW="768px"
      >
        {itemsList}
      </UnorderedList>
    </>
  );
};
