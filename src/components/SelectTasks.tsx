import useStore, { BingoData } from "../zustandStore";

const DropDownList = () => {
  const { bingoTasks, isOpen, setIsOpen, pickedTasks, setPickedTasks } =
    useStore((state) => ({
      bingoTasks: state.bingoTasks,
      isOpen: state.isOpen,
      setIsOpen: state.setIsOpen,
      pickedTasks: state.pickedTasks,
      setPickedTasks: state.setPickedTasks,
    }));

  const handleClick = (item: BingoData) => {
    pickedTasks.length < 9 && !pickedTasks.includes(item)
      ? setPickedTasks([...pickedTasks, item])
      : setPickedTasks(pickedTasks.filter((e) => e !== item));
  };

  const itemsList = bingoTasks.map((item) => {
    return (
      <button key={item.id} onClick={() => handleClick(item)}>
        {item.task}
      </button>
    );
  });

  const openDropdown = () => {
    setIsOpen(isOpen);
    console.log(isOpen);
  };

  return (
    <>
      <button onClick={openDropdown}>Select Tasks To Complete</button>
      {isOpen ? <div>{itemsList}</div> : ""}
      {pickedTasks.length <= 9 &&
        pickedTasks.length > 0 &&
        pickedTasks.map((task) => {
          return (
            <div key={task.id}>
              {task.task}
              <button
                onClick={() =>
                  setPickedTasks(pickedTasks.filter((e) => e !== task))
                }
              >
                -
              </button>
            </div>
          );
        })}
    </>
  );
};

export default DropDownList;
