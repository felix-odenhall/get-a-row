import { Box, Button, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import useStore from "../../store/zustandStore";
import { isValidUsername } from "../../utils/isValidUsername";

export const CreateUserForm = () => {
  const { username, setUsername, setHasUsername } = useStore((state) => ({
    username: state.username,
    setUsername: state.setUsername,
    setHasUsername: state.setHasUsername,
  }));

  const [usernameError, setUsernameError] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const checkUsername = isValidUsername(username);

    if (!checkUsername) {
      setUsername("");
      setUsernameError(true);
      return;
    }
    setUsername(username);
    setHasUsername(true);
  };

  return (
    <Box mt="52" w="100%" maxW="768px" mx="auto">
      <form onSubmit={handleSubmit} autoComplete="off">
        <Box
          display="flex"
          gap="4"
          px="4"
          justifyContent="center"
          alignItems="center"
        >
          <Input
            placeholder="Enter your name"
            type="text"
            value={username}
            borderColor="black"
            border="2px"
            onChange={(e) => setUsername?.(e.target.value)}
            data-cy="userInput"
            required
            bg="white"
            w="95%"
            p="2"
            h="100%"
            _focus={{
              border: "2px",
              borderColor: "rgba(0, 0, 0, 0.6)",
              boxShadow: " inset 1px 1px 0px 0px rgba(0, 0, 0, 0.5)",
            }}
            _hover={{
              border: "2px",
              borderColor: "black",
              boxShadow: "0 0 0 2px var(--chakra-ui-focus-ring-color)",
            }}
          />
          <Button
            type="submit"
            bg="white"
            p="5"
            m="1"
            border="2px"
            borderColor="black"
            borderRadius="3xl"
            fontWeight="bold"
            fontSize="lg"
            boxShadow="0px 4px 0 1px rgba(0, 0, 0, 1)"
            transition="all .1s ease"
            _active={{ transform: "translateY(3px)", boxShadow: "none" }}
            _hover={{
              transform: "scale(2px)",
            }}
          >
            Add name
          </Button>
        </Box>
      </form>
      {usernameError && (
        <Text
          textAlign="center"
          my="5"
          mx="4"
          fontSize="2xl"
          fontWeight="bold"
          data-cy="usernameError"
        >
          {`Letters (a-z) and numbers (0-9) only`}
        </Text>
      )}
    </Box>
  );
};
