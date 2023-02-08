import { Button, ListItem } from "@chakra-ui/react";

interface NavbarListButtonProps {
  onClick: () => void;
  buttonName: string;
}

const NavbarListButton = ({ onClick, buttonName }: NavbarListButtonProps) => {
  return (
    <ListItem>
      <Button
        bg="transparent"
        w="100%"
        h="20"
        size="md"
        fontWeight="bold"
        fontSize="xl"
        onClick={onClick}
        borderBottom="1px"
        borderColor="gray.200"
        borderRadius="none"
        mb="8"
      >
        {buttonName}
      </Button>
    </ListItem>
  );
};

export default NavbarListButton;
