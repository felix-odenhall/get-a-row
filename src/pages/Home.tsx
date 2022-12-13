import React, { useState } from "react";
import CreateUserForm from "../components/CreateUserForm";

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
      {activePlayer}
    </>
  );
}

export default Home;
