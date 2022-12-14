import { hasUsername } from "../interfaces";
import {
  getFromLocalStorage,
  parseLocalStorage,
  saveToLocalStorage,
} from "../utils/localStorage";

function StartGameComponent({ hasUsername, setHasUsername }: hasUsername) {
  const changeNameFn = () => {
    saveToLocalStorage("Username_Getarow", "");
    setHasUsername(false);
  };

  const currentPlayer = parseLocalStorage(
    getFromLocalStorage("Username_Getarow")
  );

  return (
    <>
      <h2>Welome {currentPlayer}</h2>
      <button onClick={changeNameFn}>Change name</button>
      <button>Let's Play</button>
    </>
  );
}

export default StartGameComponent;
