import useStore from "../zustandStore";

function GameBoard() {
  const {
    username,
    bingoTasks,
    hasBingo,
    setHasBingo,
    lastCompletedTask,
    setLastCompletedTask,
  } = useStore((state) => ({
    username: state.username,
    bingoTasks: state.bingoTasks,
    hasBingo: state.hasBingo,
    setHasBingo: state.setHasBingo,
    lastCompletedTask: state.lastCompletedTask,
    setLastCompletedTask: state.setLastCompletedTask,
  }));

  const bingoBoard = bingoTasks.slice(0, 9);

  function handleClick(item: { id: number }) {
    const newTasks = bingoBoard.map((task) => {
      if (task.id === item.id) {
        task.isComplete = !task.isComplete;
        setLastCompletedTask(task.task);
      }
      if (
        bingoBoard[0].isComplete &&
        bingoBoard[1].isComplete &&
        bingoBoard[2].isComplete
      ) {
        setHasBingo(true);
      } else if (
        bingoBoard[3].isComplete &&
        bingoBoard[4].isComplete &&
        bingoBoard[5].isComplete
      ) {
        setHasBingo(true);
      } else if (
        bingoBoard[6].isComplete &&
        bingoBoard[7].isComplete &&
        bingoBoard[8].isComplete
      ) {
        setHasBingo(true);
      } else if (
        bingoBoard[0].isComplete &&
        bingoBoard[3].isComplete &&
        bingoBoard[6].isComplete
      ) {
        setHasBingo(true);
      } else if (
        bingoBoard[1].isComplete &&
        bingoBoard[4].isComplete &&
        bingoBoard[7].isComplete
      ) {
        setHasBingo(true);
      } else if (
        bingoBoard[2].isComplete &&
        bingoBoard[5].isComplete &&
        bingoBoard[8].isComplete
      ) {
        setHasBingo(true);
      } else if (
        bingoBoard[0].isComplete &&
        bingoBoard[4].isComplete &&
        bingoBoard[8].isComplete
      ) {
        setHasBingo(true);
      } else if (
        bingoBoard[2].isComplete &&
        bingoBoard[4].isComplete &&
        bingoBoard[6].isComplete
      ) {
        setHasBingo(true);
      }
      return task;
    });
    console.log(newTasks);
  }

  const restartFn = () => {
    setHasBingo(false);
    setLastCompletedTask("");
    bingoBoard.map((item) => {
      item.isComplete = false;
      return item;
    });
  };

  return (
    <>
      <h2>{username}'s Game board</h2>
      <h3>
        {username} just completed the task: {lastCompletedTask}
      </h3>
      {hasBingo ? (
        <h1>BINGO</h1>
      ) : (
        bingoBoard.map((item) => {
          return (
            <button key={item.id} onClick={() => handleClick(item)}>
              {item.task}
            </button>
          );
        })
      )}

      <div>
        <button onClick={() => restartFn()}>Restart</button>
      </div>
    </>
  );
}

export default GameBoard;
