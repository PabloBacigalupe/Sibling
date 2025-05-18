import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Head = () => {

  const email = useContext(UserContext);

    return <header>
      <h2>Hola, {email}</h2>
      </header>;
};

export default Head;
