import { Text } from "@chakra-ui/react";

interface SelectAmountOfTasksProps {
  inputText: string;
}

const SelectAmountOfTasks = ({ inputText }: SelectAmountOfTasksProps) => {
  return (
    <Text color="white" fontSize="xl" fontWeight="medium" textAlign="center">
      {inputText}
    </Text>
  );
};

export default SelectAmountOfTasks;
