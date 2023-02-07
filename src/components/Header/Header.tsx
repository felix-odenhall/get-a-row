import {
  Box,
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import useStore from "../../store/zustandStore";
import HamburgerIcon from "./HamburgerIcon";

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
      <Container
        pos="sticky"
        top="0"
        w="100%"
        h="10vh"
        bg="rgba(255,255,255,0.95)"
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
        boxShadow="base"
        zIndex={5}
      >
        <HamburgerIcon onClick={onOpen} isOpen={isOpen} />
        {/* <Button colorScheme="teal" onClick={onOpen}>
          Menu
        </Button> */}
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay
            mt="10vh"
            bg="rgba(255,255,255,0.25)"
            backdropFilter="auto"
            backdropBlur="6px"
          />
          <DrawerContent h="90vh" mt="10vh" bg="red">
            <DrawerHeader>Create your account</DrawerHeader>

            <DrawerBody w="90%">
              <Button
                colorScheme="orange"
                size="md"
                bgGradient="linear(to-b, orange.400, tomato)"
                fontWeight="medium"
                fontSize="lg"
                onClick={pickNewTasks}
                boxShadow="base"
                mb="8"
              >
                Pick New Tasks
              </Button>
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue">Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Container>

      <Box
        pos="sticky"
        top="10vh"
        zIndex={3}
        h="8"
        bg="white"
        display="flex"
        justifyContent="flex-end"
      >
        {pickedTasks.length !== 0 && pickedTasks.length <= 9 && (
          <Text>{`${pickedTasks.length} / 9 Tasks`}</Text>
        )}
      </Box>
    </>
  );
};

export default Header;
