import { ChangeEvent } from "react";

interface CreateUserFormProps {
  username: string;
  setUsername: (username: string) => void;
  setActivePlayer: (username: string) => void;
}

const CreateUserForm = ({
  username,
  setUsername,
  setActivePlayer,
}: CreateUserFormProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const addUser = () => {
    setActivePlayer(username);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter your name"
        value={username}
        onChange={handleChange}
      />
      <button onClick={addUser}>Add user</button>
    </>
  );
};

export default CreateUserForm;
