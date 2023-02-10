import { Box, Button, Input } from "@chakra-ui/react";
import useStore from "../../store/zustandStore";

export const CreateUserForm = () => {
  const { username, setUsername, setHasUsername } = useStore((state) => ({
    username: state.username,
    setUsername: state.setUsername,
    setHasUsername: state.setHasUsername,
  }));

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setUsername(username);
    setHasUsername(true);
  };

  return (
    <Box
      h="50vh"
      w="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <form onSubmit={handleSubmit}>
        <Box display="flex" gap="4" px="4">
          <Input
            id="username"
            h="14"
            type="text"
            name="username"
            autoComplete="off"
            onChange={(e) => setUsername?.(e.target.value)}
            placeholder="Enter your name..."
            required
            data-cy="userInput"
          />
          <Button type="submit" h="14" px="8" data-cy="submitButton">
            Add name
          </Button>
        </Box>
      </form>
    </Box>
  );
};
