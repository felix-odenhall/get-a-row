import { Box, CloseButton, Text, useDisclosure } from "@chakra-ui/react";
import useStore from "../../store/zustandStore";
import HamburgerIcon from "./HamburgerIcon";
import PickTasksText from "./PickTasksText";
import Navbar from "./Navbar/Navbar";

export const Header = () => {
  const { hasOngoingGame, hasUsername } = useStore((state) => ({
    hasOngoingGame: state.hasOngoingGame,
    hasUsername: state.hasUsername,
  }));
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        as="header"
        pos="sticky"
        top="0"
        left="0"
        w="100%"
        bg="rgba(255,255,255)"
        mb="5"
        zIndex={5}
      >
        <Box
          display="flex"
          h="8vh"
          alignItems="center"
          justifyContent="space-between"
          shadow="md"
          px="1"
        >
          <Text fontSize="xl" fontWeight="bold">
            Get A Row
          </Text>

          {!isOpen ? (
            <HamburgerIcon onClick={onOpen} />
          ) : (
            <CloseButton fontSize="xl" w="6" mr="1" />
          )}
          <Navbar isOpen={isOpen} onClose={onClose} />
        </Box>
        {hasUsername && !hasOngoingGame && <PickTasksText />}
      </Box>
    </>
  );
};

export default Header;
