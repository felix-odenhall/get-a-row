import React, { useState } from "react";
import CreateUserForm from "../components/CreateUserForm";
import StartGameComponent from "../components/StartGameComponent";

function Home() {
  const [username, setUsername] = useState<string>("");
  const [activePlayer, setActivePlayer] = useState<string>("");
  return (
    <>
      <CreateUserForm
        username={username}
        setUsername={setUsername}
        setActivePlayer={setActivePlayer}
      />
      <StartGameComponent activePlayer={activePlayer} />
    </>
  );
}

export default Home;
