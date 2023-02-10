import {
  Box,
  CloseButton,
  Text,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import useStore from "../../store/zustandStore";
import HamburgerIcon from "./HamburgerIcon";
import PickTasksContainer from "./PickTasksContainer";
import Navbar from "./Navbar/Navbar";

export const Header = () => {
  const { hasOngoingGame, hasUsername } = useStore((state) => ({
    hasOngoingGame: state.hasOngoingGame,
    hasUsername: state.hasUsername,
  }));
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [mediaTablet] = useMediaQuery("(min-width: 768px)");

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
        shadow={`-2px 2px 5px 1px rgba(0, 0, 0, 0.2)`}
        zIndex={5}
      >
        <Box
          display="flex"
          h="8vh"
          w={mediaTablet ? "768px" : "100%"}
          alignItems="center"
          justifyContent="space-between"
          px="1"
          m="0 auto"
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
        {hasUsername && !hasOngoingGame && <PickTasksContainer />}
      </Box>
    </>
  );
};

export default Header;
