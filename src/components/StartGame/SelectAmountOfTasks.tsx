import { Text } from "@chakra-ui/react";

interface SelectAmountOfTasksProps {
  inputText: string;
}

const SelectAmountOfTasks = ({ inputText }: SelectAmountOfTasksProps) => {
  return (
    <Text color="tomato" fontSize="2xl" fontWeight="bold">
      {inputText}
    </Text>
  );
};

export default SelectAmountOfTasks;
