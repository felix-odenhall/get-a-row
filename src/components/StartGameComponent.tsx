import useStore from "../zustandStore";
import SelectTasks from "./SelectTasks";

function StartGameComponent() {
  const {
    setHasOngoingGame,
    username,
    bingoTasks,
    setBingoTasks,
    shuffleArr,
    pickedTasks,
  } = useStore((state) => ({
    username: state.username,
    setHasOngoingGame: state.setHasOngoingGame,
    bingoTasks: state.bingoTasks,
    setBingoTasks: state.setBingoTasks,
    shuffleArr: state.shuffleArr,
    pickedTasks: state.pickedTasks,
  }));

  const startGame = () => {
    setHasOngoingGame(true);
    setBingoTasks(shuffleArr(bingoTasks));
  };

  const calcAmountOfTasksFn = () => {
    if (pickedTasks.length === 0) {
      return <p> Select 9 tasks</p>;
    } else if (pickedTasks.length === 9) {
      return (
        <div>
          <button onClick={startGame}>Let's Play</button>
        </div>
      );
    } else {
      return <p>Select {9 - pickedTasks.length} more tasks</p>;
    }
  };

  const calcAmountOfTasks = calcAmountOfTasksFn();

  return (
    <>
      <h2>Welome {username}</h2>
      {calcAmountOfTasks}

      <SelectTasks />
    </>
  );
}

export default StartGameComponent;
