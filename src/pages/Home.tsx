import React, { useState } from "react";
import CreateUserForm from "../components/CreateUserForm";

function Home() {
  const [username, setUsername] = useState<string>("");
  return (
    <>
      <CreateUserForm username={username} setUsername={setUsername} />
    </>
  );
}

export default Home;
