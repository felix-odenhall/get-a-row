import { saveToLocalStorage } from "../utils/localStorage";
import useStore from "../zustandStore";

const CreateUserForm = () => {
  const { username, setUsername, hasUsername, setHasUsername } = useStore(
    (state) => ({
      username: state.username,
      setUsername: state.setUsername,
      hasUsername: state.hasUsername,
      setHasUsername: state.setHasUsername,
    })
  );

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    saveToLocalStorage("Username_Getarow", username ?? "");
    setHasUsername(true);
    console.log(hasUsername);
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

export default CreateUserForm;
