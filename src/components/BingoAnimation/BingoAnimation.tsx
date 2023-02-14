import { chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

export const BingoAnimation = () => {
  return (
    <ChakraBox
      animate={{
        scale: [0, 2, 1, 1.5, 1, 1],
      }}
      // @ts-ignore no problem in operation, although type error appears.
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
      padding="2"
      bgGradient="linear(to-l, #7928CA, #FF0080)"
      bgClip="text"
      display="flex"
      fontWeight="extrabold"
      justifyContent="center"
      alignItems="center"
      fontSize="5xl"
      mb="40"
      data-cy="bingoText"
    >
      BINGO
    </ChakraBox>
  );
};
