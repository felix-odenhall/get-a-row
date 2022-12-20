import useStore from "../zustandStore";

function StartGameComponent() {
  const {
    setHasUsername,
    setHasOngoingGame,
    username,
    setUsername,
    bingoTasks,
    setBingoTasks,
    shuffleArr,
  } = useStore((state) => ({
    username: state.username,
    setUsername: state.setUsername,
    setHasUsername: state.setHasUsername,
    setHasOngoingGame: state.setHasOngoingGame,
    bingoTasks: state.bingoTasks,
    setBingoTasks: state.setBingoTasks,
    shuffleArr: state.shuffleArr,
  }));

  const changeNameFn = () => {
    setUsername("");
    setHasUsername(false);
  };

  const startGame = () => {
    setHasOngoingGame(true);
    setBingoTasks(shuffleArr(bingoTasks));
  };

  return (
    <>
      <h2>Welome {username}</h2>
      <button onClick={changeNameFn}>Change name</button>
      <button onClick={startGame}>Let's Play</button>
    </>
  );
}

export default StartGameComponent;
