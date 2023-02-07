import { Box } from "@chakra-ui/react";
import { chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

interface IHamburgerIconProps {
  onClick: () => void;
  isOpen: boolean;
}

const HamburgerIcon = ({ onClick, isOpen }: IHamburgerIconProps) => {
  return (
    <Box onClick={onClick}>
      <Box w="7" h="3px" my="1" bg="black"></Box>
      <Box w="7" h="3px" my="1" bg="black"></Box>
      <Box w="7" h="3px" my="1" bg="black"></Box>
    </Box>
  );
};

export default HamburgerIcon;
