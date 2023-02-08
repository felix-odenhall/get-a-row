import {
  Box,
  CloseButton,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Text,
  UnorderedList,
  useDisclosure,
} from "@chakra-ui/react";
import useStore from "../../store/zustandStore";
import HamburgerIcon from "./HamburgerIcon";
import NavbarListButton from "./NavbarListButton";

export const Header = () => {
  const {
    setLastCompletedTask,
    pickedTasks,
    setPickedTasks,
    setHasOngoingGame,
  } = useStore((state) => ({
    setLastCompletedTask: state.setLastCompletedTask,
    pickedTasks: state.pickedTasks,
    setPickedTasks: state.setPickedTasks,
    setHasOngoingGame: state.setHasOngoingGame,
  }));
  const { isOpen, onOpen, onClose } = useDisclosure();

  const pickNewTasks = () => {
    onClose();
    setHasOngoingGame(false);
    setPickedTasks([]);
    setLastCompletedTask("");
  };

  return (
    <>
      <Box
        as="header"
        pos="sticky"
        top="0"
        left="0"
        h="8vh"
        w="100%"
        px="2"
        bg="rgba(255,255,255,0.95)"
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
        zIndex={5}
        shadow={isOpen ? "base" : "none"}
      >
        {!isOpen ? (
          <HamburgerIcon onClick={onOpen} />
        ) : (
          <CloseButton fontSize="xl" mr="2" />
        )}
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
                <NavbarListButton
                  onClick={pickNewTasks}
                  buttonName="Reset game"
                />
                <NavbarListButton
                  onClick={pickNewTasks}
                  buttonName="Pick new tasks"
                />
                <NavbarListButton
                  onClick={pickNewTasks}
                  buttonName="Change name"
                />
              </UnorderedList>
            </DrawerBody>

            <DrawerFooter></DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Box>

      <Box
        pos="sticky"
        top="8vh"
        zIndex={3}
        h="8"
        bg="rgba(255,255,255,0.95)"
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
        boxShadow="base"
      >
        {pickedTasks.length !== 0 && pickedTasks.length <= 9 && (
          <Text mr="3">{`Selected: ${pickedTasks.length} / 9`}</Text>
        )}
      </Box>
    </>
  );
};

export default Header;
