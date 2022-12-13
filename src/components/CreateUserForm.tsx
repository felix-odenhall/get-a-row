interface CreateUserFormProps {
  username: string;
  setUsername: (username: string) => void;
}

const CreateUserForm = ({ username, setUsername }: CreateUserFormProps) => {
  const addUser = () => {
    console.log(username);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={addUser}>Add user</button>
    </>
  );
};

export default CreateUserForm;
