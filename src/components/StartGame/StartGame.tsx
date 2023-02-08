import useStore from "../../store/zustandStore";
import { Box, Button, Text } from "@chakra-ui/react";
import { SelectTasks } from "../index";

export const StartGame = () => {
  return (
    <section>
      <Box mb="10">
        <SelectTasks />
      </Box>
    </section>
  );
};
