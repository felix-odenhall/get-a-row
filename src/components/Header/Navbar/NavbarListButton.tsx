import { Box, ListItem, Text } from "@chakra-ui/react";

interface NavbarListButtonProps {
  onClick: () => void;
  buttonName: string;
}

const NavbarListButton = ({ onClick, buttonName }: NavbarListButtonProps) => {
  return (
    <ListItem>
      <Box
        as="button"
        bg="transparent"
        w="100%"
        h="20"
        fontWeight="bold"
        fontSize="xl"
        onClick={onClick}
        borderBottom="1px"
        borderColor="gray.200"
        mb="8"
      >
        <Text>{buttonName}</Text>
      </Box>
    </ListItem>
  );
};

export default NavbarListButton;
