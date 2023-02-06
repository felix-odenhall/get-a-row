import { CreateUserForm, GameBoard, StartGame } from "./components/index";

import useStore from "./store/zustandStore";

function App() {
  const { hasUsername, hasOngoingGame } = useStore((state) => ({
    username: state.username,
    hasUsername: state.hasUsername,
    hasOngoingGame: state.hasOngoingGame,
  }));

  if (hasUsername) {
    if (!hasOngoingGame) {
      return <StartGame />;
    } else {
      return <GameBoard />;
    }
  } else return <CreateUserForm />;
}

export default App;
