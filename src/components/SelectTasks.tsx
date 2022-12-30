import { Button, Stack } from "@chakra-ui/react";
import useStore, { BingoData } from "../zustandStore";

const DropDownList = () => {
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
      <Button
        size="sm"
        colorScheme={pickedTasks.includes(item) ? "green" : "gray"}
        w="92%"
        h="12"
        fontSize="md"
        boxShadow="base"
        key={item.id}
        onClick={() => handleClick(item)}
      >
        {item.task}
      </Button>
    );
  });

  return (
    <>
      <Stack spacing={3} direction="column" align="center">
        {itemsList}
      </Stack>
    </>
  );
};

export default DropDownList;
