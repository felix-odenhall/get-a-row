import useStore from "../zustandStore";

const HasBingo = () => {
  const {
    setHasBingo,
    setLastCompletedTask,
    shuffleArr,
    pickedTasks,
    setPickedTasks,
  } = useStore((state) => ({
    setHasBingo: state.setHasBingo,
    setLastCompletedTask: state.setLastCompletedTask,
    shuffleArr: state.shuffleArr,
    pickedTasks: state.pickedTasks,
    setPickedTasks: state.setPickedTasks,
  }));
  const restartFn = () => {
    setHasBingo(false);
    setLastCompletedTask("");
    pickedTasks.map((el) => {
      el.isComplete = false;
      return el;
    });
    setPickedTasks(shuffleArr(pickedTasks));
  };
  return (
    <>
      <h1>BINGO</h1>
      <button onClick={() => restartFn()}>Restart</button>
    </>
  );
};

export default HasBingo;
