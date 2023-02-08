import { Box } from "@chakra-ui/react";

interface IHamburgerIconProps {
  onClick: () => void;
}

const HamburgerIcon = ({ onClick }: IHamburgerIconProps) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <Box onClick={handleClick} mr="2">
      <Box w="6" h="3px" my="1" bg="black"></Box>
      <Box w="6" h="3px" my="1" bg="black"></Box>
      <Box w="6" h="3px" my="1" bg="black"></Box>
    </Box>
  );
};

export default HamburgerIcon;
