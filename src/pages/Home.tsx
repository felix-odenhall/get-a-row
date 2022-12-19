import { useState } from "react";
import CreateUserForm from "../components/CreateUserForm";
import GameBoard from "../components/GameBoard";
import StartGameComponent from "../components/StartGameComponent";
import { getFromLocalStorage, parseLocalStorage } from "../utils/localStorage";
import { BingoData } from "../interfaces";
import { fifaDataObj } from "../fifaData";
import useStore from "../zustandStore";

function Home() {
  // const [bingoTasks, setBingoTasks] = useState<BingoData[]>([...fifaDataObj]);

  const { hasUsername, hasOngoingGame } = useStore((state) => ({
    username: state.username,
    hasUsername: state.hasUsername,
    hasOngoingGame: state.hasOngoingGame,
  }));

  if (hasUsername) {
    if (!hasOngoingGame) {
      return <StartGameComponent />;
    } else {
      return (
        <GameBoard
        // bingoTasks={bingoTasks}
        />
      );
    }
  } else return <CreateUserForm />;
}

export default Home;
