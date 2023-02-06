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
    <>
      <form onSubmit={handleSubmit}>
        <input
          id="username"
          type="text"
          name="username"
          autoComplete="off"
          onChange={(e) => setUsername?.(e.target.value)}
          placeholder="Enter your name..."
          required
        />
        <button type="submit">Add name</button>
      </form>
    </>
  );
};
