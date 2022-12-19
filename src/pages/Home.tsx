import CreateUserForm from "../components/CreateUserForm";
import GameBoard from "../components/GameBoard";
import StartGameComponent from "../components/StartGameComponent";

import useStore from "../zustandStore";

function Home() {
  const { hasUsername, hasOngoingGame } = useStore((state) => ({
    username: state.username,
    hasUsername: state.hasUsername,
    hasOngoingGame: state.hasOngoingGame,
  }));

  if (hasUsername) {
    if (!hasOngoingGame) {
      return <StartGameComponent />;
    } else {
      return <GameBoard />;
    }
  } else return <CreateUserForm />;
}

export default Home;
