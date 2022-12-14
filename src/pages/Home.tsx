import { useState } from "react";
import CreateUserForm from "../components/CreateUserForm";
import StartGameComponent from "../components/StartGameComponent";
import { getFromLocalStorage, parseLocalStorage } from "../utils/localStorage";

function Home() {
  const [hasUsername, setHasUsername] = useState(false);

  const isAPlayer = parseLocalStorage(getFromLocalStorage("Username_Getarow"));

  console.log(hasUsername);
  return (
    <>
      {!isAPlayer && !hasUsername ? (
        <CreateUserForm
          hasUsername={hasUsername}
          setHasUsername={setHasUsername}
        />
      ) : (
        <StartGameComponent
          hasUsername={hasUsername}
          setHasUsername={setHasUsername}
        />
      )}
    </>
  );
}

export default Home;
