import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const LoginScreen = () => {
  const { setUser } = useContext(UserContext);
  const newUser = {
    id: 127,
    name: "Valen Gomez",
  };
  return (
    <div>
      <h1>Login Screen</h1>
      <hr />
      <button 
        className="btn btn-info"
        onClick={() => setUser(newUser)}
      >
          Login
      </button>
    </div>
  );
};

export default LoginScreen;
