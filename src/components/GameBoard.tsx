import { useState } from "react";
import { lines3x3 } from "../utils/gameBoards";
import { calculateWinner } from "../utils/winningCondition";
import useStore, { BingoData } from "../zustandStore";
import SelectTasks from "./SelectTasks";

function GameBoard() {
  const {
    username,
    bingoTasks,
    hasBingo,
    setHasBingo,
    lastCompletedTask,
    setLastCompletedTask,
    setBingoTasks,
    shuffleArr,
    pickedTasks,
    setPickedTasks,
  } = useStore((state) => ({
    username: state.username,
    bingoTasks: state.bingoTasks,
    hasBingo: state.hasBingo,
    setHasBingo: state.setHasBingo,
    lastCompletedTask: state.lastCompletedTask,
    setLastCompletedTask: state.setLastCompletedTask,
    setBingoTasks: state.setBingoTasks,
    shuffleArr: state.shuffleArr,
    pickedTasks: state.pickedTasks,
    setPickedTasks: state.setPickedTasks,
  }));

  const bingoBoard = pickedTasks;
  const [boardSize, setBoardSize] = useState(lines3x3);

  const handleClick = (item: { id: number }) => {
    bingoBoard.map((task) => {
      if (task.id === item.id) {
        task.isComplete = !task.isComplete;
        setLastCompletedTask(task.task);
      }
      const result = calculateWinner(bingoBoard, boardSize);
      if (result) {
        setHasBingo(true);
        setLastCompletedTask("");
      }

      return task;
    });
  };

  // pickedTasks.map((item) => {
  //   return (
  //     <>
  //       <button key={item.id} onClick={() => handleClick(item)}>
  //         {item.task}
  //       </button>
  //     </>
  //   );
  // });

  const canPlay = () => {
    if (pickedTasks.length === 9) {
      return <button>Start Game</button>;
    } else {
      return (
        <h1>
          {pickedTasks.length === 0
            ? "Select 9 tasks"
            : `select ${9 - pickedTasks.length} more tasks`}
        </h1>
      );
    }
  };

  const restartFn = () => {
    setHasBingo(false);
    setLastCompletedTask("");
    bingoBoard.map((item) => {
      item.isComplete = false;
      return item;
    });
    setBingoTasks(shuffleArr(bingoTasks));
  };

  return (
    <>
      <h2>{username}'s Game board</h2>
      {pickedTasks.length <= 9 && pickedTasks.length > 0 && (
        <p>You have picked {pickedTasks.length} tasks</p>
      )}
      {<SelectTasks />}
      <h3>
        {lastCompletedTask === "" ? (
          ""
        ) : (
          <p>
            {username} just completed the task: {lastCompletedTask}
          </p>
        )}
      </h3>
      {hasBingo ? <h1>BINGO</h1> : canPlay()}

      <div>
        <button onClick={() => restartFn()}>Restart</button>
      </div>
    </>
  );
}

export default GameBoard;
