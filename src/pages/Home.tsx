import { useState } from "react";
import CreateUserForm from "../components/CreateUserForm";
import GameBoard from "../components/GameBoard";
import StartGameComponent from "../components/StartGameComponent";
import { getFromLocalStorage, parseLocalStorage } from "../utils/localStorage";

function Home() {
  const [hasUsername, setHasUsername] = useState(false);
  const [username, setUsername] = useState(
    parseLocalStorage(getFromLocalStorage("Username_Getarow"))
  );
  const [hasOngoingGame, setHasOngoingGame] = useState(false);

  if (hasUsername) {
    if (!hasOngoingGame) {
      return (
        <StartGameComponent
          setHasUsername={setHasUsername}
          hasOngoingGame={hasOngoingGame}
          setHasOngoingGame={setHasOngoingGame}
        />
      );
    } else {
      return <GameBoard />;
    }
  } else
    return (
      <CreateUserForm
        username={username}
        setUsername={setUsername}
        hasUsername={hasUsername}
        setHasUsername={setHasUsername}
      />
    );
}

export default Home;
