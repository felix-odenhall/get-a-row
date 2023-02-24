import { Box } from "@chakra-ui/react";
import {
  CreateUserForm,
  GameBoard,
  Header,
  SelectTasks,
} from "./components/index";

import useStore from "./store/zustandStore";

const App = () => {
  const { hasUsername, hasOngoingGame } = useStore((state) => ({
    username: state.username,
    hasUsername: state.hasUsername,
    hasOngoingGame: state.hasOngoingGame,
  }));
  return (
    <>
      <Header />
      <Box as="main" w="100%" h="full" bg="#00CBFE">
        {hasUsername && !hasOngoingGame && <SelectTasks />}
        {hasUsername && hasOngoingGame && <GameBoard />}
        {!hasUsername && <CreateUserForm />}
      </Box>
    </>
  );
};

export default App;
