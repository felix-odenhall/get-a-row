import useStore from "../zustandStore";

function GameBoard() {
  const { username, bingoTasks } = useStore((state) => ({
    username: state.username,
    bingoTasks: state.bingoTasks,
  }));

  return (
    <>
      <h2>{username}'s Game board</h2>
      {bingoTasks.slice(0, 9).map((item) => {
        return <button key={item.id}>{item.task}</button>;
      })}
    </>
  );
}

export default GameBoard;
