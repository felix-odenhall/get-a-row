import useStore, { BingoData } from "../zustandStore";

interface IDropDownListProps {
  tasks: BingoData[];
  setTasks: (tasks: BingoData[]) => void;
}

const DropDownList = ({ setTasks, tasks }: IDropDownListProps) => {
  const { bingoTasks, isOpen, setIsOpen } = useStore((state) => ({
    bingoTasks: state.bingoTasks,
    isOpen: state.isOpen,
    setIsOpen: state.setIsOpen,
  }));

  const handleClick = (item: BingoData) => {
    setTasks([...tasks, item]);
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
      <button onClick={openDropdown}>Select options</button>
      {isOpen ? <div>{itemsList}</div> : ""}
    </>
  );
};

export default DropDownList;
