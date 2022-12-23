import { useState } from "react";
import { lines3x3 } from "../utils/gameBoards";
import { calculateWinner } from "../utils/winningCondition";
import useStore from "../zustandStore";

function GameBoard() {
  const {
    username,
    hasBingo,
    setHasBingo,
    lastCompletedTask,
    setLastCompletedTask,
    shuffleArr,
    pickedTasks,
    setPickedTasks,
    setHasOngoingGame,
  } = useStore((state) => ({
    username: state.username,
    hasBingo: state.hasBingo,
    setHasBingo: state.setHasBingo,
    lastCompletedTask: state.lastCompletedTask,
    setLastCompletedTask: state.setLastCompletedTask,
    shuffleArr: state.shuffleArr,
    pickedTasks: state.pickedTasks,
    setPickedTasks: state.setPickedTasks,
    setHasOngoingGame: state.setHasOngoingGame,
  }));

  // const bingoBoard = pickedTasks;
  const [boardSize, setBoardSize] = useState(lines3x3);

  const handleClick = (item: { id: number }) => {
    pickedTasks.map((task) => {
      if (task.id === item.id) {
        task.isComplete = !task.isComplete;
        setLastCompletedTask(task.task);
      }
      const result = calculateWinner(pickedTasks, boardSize);
      if (result) {
        setHasBingo(true);
        setLastCompletedTask("");
      }

      return task;
    });
  };

  const canPlayFn = () => {
    if (pickedTasks.length === 9) {
      return pickedTasks.map((el) => {
        return (
          <button key={el.id} onClick={() => handleClick(el)}>
            {el.task}
          </button>
        );
      });
    }
  };

  const canPlay = canPlayFn();

  const pickNewTasks = () => {
    setHasOngoingGame(false);
    setPickedTasks([]);
  };

  const restartFn = () => {
    setHasBingo(false);
    setLastCompletedTask("");
    pickedTasks.map((item) => {
      item.isComplete = false;
      return item;
    });
    setPickedTasks(shuffleArr(pickedTasks));
  };

  return (
    <>
      <h2>{username}'s Game board</h2>
      <button onClick={() => pickNewTasks()}>Pick new tasks</button>
      <h3>
        {lastCompletedTask === "" ? (
          ""
        ) : (
          <p>
            {username} just completed the task: {lastCompletedTask}
          </p>
        )}
      </h3>
      {hasBingo ? <h1>BINGO</h1> : canPlay}

      {hasBingo && (
        <div>
          <button onClick={() => restartFn()}>Restart</button>
        </div>
      )}
    </>
  );
}

export default GameBoard;
