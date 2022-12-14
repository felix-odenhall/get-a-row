import { useState } from "react";
import { hasUsername } from "../interfaces";
import {
  getFromLocalStorage,
  parseLocalStorage,
  saveToLocalStorage,
} from "../utils/localStorage";

const CreateUserForm = ({ hasUsername, setHasUsername }: hasUsername) => {
  const [username, setUsername] = useState(
    parseLocalStorage(getFromLocalStorage("Username_Getarow"))
  );
  const handleSubmit = () => {
    saveToLocalStorage("Username_Getarow", username);
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
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your name..."
          required
        />
        <button type="submit">Add name</button>
      </form>
    </>
  );
};

export default CreateUserForm;
