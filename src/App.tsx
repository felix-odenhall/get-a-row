import { Box } from "@chakra-ui/react";
import {
  CreateUserForm,
  GameBoard,
  Header,
  StartGame,
} from "./components/index";

import useStore from "./store/zustandStore";

const App = () => {
  const { hasUsername, hasOngoingGame } = useStore((state) => ({
    username: state.username,
    hasUsername: state.hasUsername,
    hasOngoingGame: state.hasOngoingGame,
  }));
  return (
    <Box as="main">
      <Header />
      {hasUsername && !hasOngoingGame && <StartGame />}
      {hasUsername && hasOngoingGame && <GameBoard />}
      {!hasUsername && <CreateUserForm />}
    </Box>
  );
};

export default App;
