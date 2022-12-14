import { useEffect, useState } from "react";
import CreateUserForm from "../components/CreateUserForm";
import StartGameComponent from "../components/StartGameComponent";

function Home() {
  const [username, setUsername] = useState<string>("");
  const [activePlayer, setActivePlayer] = useState<string>("");

  const hasAUsernameFn = () => {
    if (activePlayer === "") {
      return (
        <>
          <CreateUserForm
            username={username}
            setUsername={setUsername}
            setActivePlayer={setActivePlayer}
          />
        </>
      );
    } else {
      return (
        <>
          <StartGameComponent
            setActivePlayer={setActivePlayer}
            activePlayer={activePlayer}
            username={username}
            setUsername={setUsername}
          />
        </>
      );
    }
  };

  useEffect(() => {
    console.log("change happened");
    setActivePlayer("");
  }, [username]);

  const hasAUser = hasAUsernameFn();

  return <>{hasAUser}</>;
}

export default Home;
