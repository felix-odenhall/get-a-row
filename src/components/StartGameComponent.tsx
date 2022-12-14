interface StartGameComponentProps {
  activePlayer: string;
  username: string;
  setUsername: (username: string) => void;
  setActivePlayer: (activePlayer: string) => void;
}

function StartGameComponent({
  activePlayer,
  setUsername,
}: StartGameComponentProps) {
  return (
    <>
      <h2>Welcome {activePlayer}</h2>
      <button onClick={() => setUsername("")}>Change name</button>
      <button>Let's Play</button>
    </>
  );
}

export default StartGameComponent;
