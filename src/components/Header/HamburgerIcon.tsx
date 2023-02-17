import { Box } from "@chakra-ui/react";

interface IHamburgerIconProps {
  onClick: () => void;
}

const HamburgerIcon = ({ onClick }: IHamburgerIconProps) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <Box onClick={handleClick}>
      <Box w="6" h="3px" my="1" bg="black" borderRadius="lg"></Box>
      <Box w="6" h="3px" my="1" bg="black" borderRadius="lg"></Box>
      <Box w="6" h="3px" my="1" bg="black" borderRadius="lg"></Box>
    </Box>
  );
};

export default HamburgerIcon;
