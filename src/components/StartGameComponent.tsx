interface StartGameComponentProps {
  activePlayer: string;
}

function StartGameComponent({ activePlayer }: StartGameComponentProps) {
  return (
    <>
      <h2>Welcome {activePlayer}</h2>
      <button>Let's Play</button>
    </>
  );
}

export default StartGameComponent;
