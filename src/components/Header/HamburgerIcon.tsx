import { Box } from "@chakra-ui/react";

interface IHamburgerIconProps {
  onClick: () => void;
}

const HamburgerIcon = ({ onClick }: IHamburgerIconProps) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <Box onClick={handleClick} mr="1">
      <Box w="7" h="3px" my="1" bg="black" borderRadius="lg"></Box>
      <Box w="7" h="3px" my="1" bg="black" borderRadius="lg"></Box>
      <Box w="7" h="3px" my="1" bg="black" borderRadius="lg"></Box>
    </Box>
  );
};

export default HamburgerIcon;
