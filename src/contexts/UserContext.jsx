import { createContext, useContext, useState } from "react";
import { useAuthentication, useUser } from "../hooks/apiHooks";
import { useNavigate } from "react-router-dom";

const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState()
  const { login } = useAuthentication();
  const navigate = useNavigate();
  const { getUserByToken } = useUser();

  console.log("user in UserProvider", user)

  const handleLogin = async (credentials) => {
    console.log("credentials", credentials);
    console.log({ credentials });
    try {
      const userData = await login(credentials);
      console.log('userData', userData);
      localStorage.setItem('token', userData.token);
      setUser(userData.user) // tämä lisää contextiin userin kirjautumisessa
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token')
    setUser(undefined)
    navigate("/")
  }

  const handleAutoLogin = async () => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        const userData = await getUserByToken(token);
        setUser(userData.user);
        navigate("/")
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  // TODO poista setUser ja refaktoroi Profile.jsx
  return (
    <UserContext.Provider value={{ user, handleLogin, handleLogout, handleAutoLogin }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => useContext(UserContext)
