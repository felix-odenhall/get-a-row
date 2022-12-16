import { IUsername } from "../interfaces";
import { saveToLocalStorage } from "../utils/localStorage";

const CreateUserForm = ({
  username,
  setUsername,
  setHasUsername,
}: IUsername) => {
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    saveToLocalStorage("Username_Getarow", username ?? "");
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

export default CreateUserForm;
