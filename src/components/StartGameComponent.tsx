import {
  getFromLocalStorage,
  parseLocalStorage,
  saveToLocalStorage,
} from "../utils/localStorage";
import useStore from "../zustandStore";

function StartGameComponent() {
  const { setHasUsername, setHasOngoingGame } = useStore((state) => ({
    setHasUsername: state.setHasUsername,
    setHasOngoingGame: state.setHasOngoingGame,
  }));

  const changeNameFn = () => {
    saveToLocalStorage("Username_Getarow", "");
    setHasUsername(false);
  };

  const startGame = () => {
    setHasOngoingGame(true);
  };

  const currentPlayer = parseLocalStorage(
    getFromLocalStorage("Username_Getarow")
  );

  return (
    <>
      <h2>Welome {currentPlayer}</h2>
      <button onClick={changeNameFn}>Change name</button>
      <button onClick={startGame}>Let's Play</button>
    </>
  );
}

export default StartGameComponent;
