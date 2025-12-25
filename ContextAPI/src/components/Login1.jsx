import React, { useState, useContext } from "react";
import userContext from "../Context/UserContext";

function Login1() {
  const [userName, setUserName] = useState("");
  const [pasword, setUPasword] = useState("");

  const { setUser } = useContext(userContext);

  const handleSubmit = (e) => {
    e.preventDefault({ userName, pasword });
  };
  return (
    <div>
      <h2>login</h2>
      <input
        type="text"
        placeholder="userName"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      {"  "}
      <input
        type="text"
        placeholder="Pasword"
        value={pasword}
        onChange={(e) => setUPasword(e.target.value)}
      />
      <button onClick={handleSubmit}> Submit</button>
    </div>
  );
}

export default Login1;
