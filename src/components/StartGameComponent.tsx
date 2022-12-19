import useStore from "../zustandStore";

function StartGameComponent() {
  const { setHasUsername, setHasOngoingGame, username, setUsername } = useStore(
    (state) => ({
      username: state.username,
      setUsername: state.setUsername,
      setHasUsername: state.setHasUsername,
      setHasOngoingGame: state.setHasOngoingGame,
    })
  );

  const changeNameFn = () => {
    setUsername("");
    setHasUsername(false);
  };

  const startGame = () => {
    setHasOngoingGame(true);
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
