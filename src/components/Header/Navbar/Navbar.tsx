import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  UnorderedList,
} from "@chakra-ui/react";
import useStore from "../../../store/zustandStore";
import NavbarListButton from "./NavbarListButton";

interface NavbarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Navbar = ({ isOpen, onClose }: NavbarProps) => {
  const {
    setLastCompletedTask,
    shuffleArr,
    pickedTasks,
    setPickedTasks,
    setHasOngoingGame,
    setUsername,
    setHasUsername,
    setHasBingo,
    hasOngoingGame,
  } = useStore((state) => ({
    setUsername: state.setUsername,
    setHasUsername: state.setHasUsername,
    setLastCompletedTask: state.setLastCompletedTask,
    shuffleArr: state.shuffleArr,
    pickedTasks: state.pickedTasks,
    setPickedTasks: state.setPickedTasks,
    setHasOngoingGame: state.setHasOngoingGame,
    hasOngoingGame: state.hasOngoingGame,
    setHasBingo: state.setHasBingo,
    hasUsername: state.hasUsername,
  }));

  const restartGame = () => {
    onClose();
    setHasBingo(false);
    setLastCompletedTask("");
    pickedTasks.map((el) => {
      el.isComplete = false;
      return el;
    });
    setPickedTasks(shuffleArr(pickedTasks));
  };

  const pickNewTasks = () => {
    onClose();
    setHasOngoingGame(false);
    setPickedTasks([]);
    setLastCompletedTask("");
  };
  const changeName = () => {
    onClose();
    setHasOngoingGame(false);
    setPickedTasks([]);
    setLastCompletedTask("");
    setUsername("");
    setHasUsername(false);
  };

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="full">
      <DrawerOverlay
        mt="8vh"
        bg="rgba(255,255,255,0.25)"
        backdropFilter="auto"
        backdropBlur="6px"
      />
      <DrawerContent h="fill" w="30%" mt="8.5vh" bg="white">
        <DrawerHeader
          w="100%"
          textAlign="center"
          mb="2"
          borderBottom="1px"
          fontSize="3xl"
        >
          Menu
        </DrawerHeader>

        <DrawerBody px="0">
          <UnorderedList listStyleType="none" m="0">
            <NavbarListButton onClick={changeName} buttonName="Change name" />

            {hasOngoingGame && (
              <>
                <NavbarListButton
                  onClick={pickNewTasks}
                  buttonName="Pick new tasks"
                />
                <NavbarListButton onClick={restartGame} buttonName="Restart" />
              </>
            )}
          </UnorderedList>
        </DrawerBody>

        <DrawerFooter></DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default Navbar;
