import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isloggedIn, setIsLoggedIn] = useState(false);
  const [userToken, setUserToken] = useState("");
  const [user, setUser] = useState({});

  const AddUser = async (loggedUser) => {
    const url = "/api/auth/signup";
    const config = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loggedUser),
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();
      const { errors } = data;
      console.log(data);
    } catch (error) {
    } finally {
    }
  };

  const checkLogin = () => {
    if (localStorage.getItem("userToken")) {
      let loggedUser = localStorage.getItem("loggedUser");
      setUserToken(localStorage.userToken);
      setUser(JSON.parse(loggedUser));
      AddUser(JSON.parse(loggedUser));

      setIsLoggedIn(true);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        userToken,
        AddUser,
        setUserToken,
        isloggedIn,
        setIsLoggedIn,
        checkLogin,
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
