import { Box, Button, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import useStore from "../../store/zustandStore";

export const CreateUserForm = () => {
  const { username, setUsername, setHasUsername } = useStore((state) => ({
    username: state.username,
    setUsername: state.setUsername,
    setHasUsername: state.setHasUsername,
  }));

  const [usernameError, setUsernameError] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const regexp = /^[A-Za-z0-9]*$/;
    if (!regexp.test(username) || !regexp.test(username)) {
      setUsername("");
      setUsernameError(true);
      return;
    }
    setUsername(username);
    setHasUsername(true);
    usernameError && setUsernameError(false);
  };

  return (
    <Box mt="52" w="100%" maxW="768px" mx="auto">
      <form onSubmit={handleSubmit} autoComplete="off">
        <Box display="flex" gap="4" px="4">
          <Input
            id="username"
            h="14"
            type="text"
            name="username"
            onChange={(e) => setUsername?.(e.target.value)}
            placeholder="Enter your username..."
            required
            data-cy="userInput"
            value={username}
          />
          <Button type="submit" h="14" px="8" data-cy="submitButton">
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
