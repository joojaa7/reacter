import { Link } from "react-router-dom"
import { useUser } from "../hooks/apiHooks"
import { useEffect, useState } from "react";
import { fetchData } from "../lib/fetchData";

export const Profile = () => {
  const { getUserByToken } = useUser();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const token = localStorage.getItem('token');
      const userData = await getUserByToken(token);
      setUser(userData.user);
    }
    getUser();
  }, []);
  return <div>
    <h2 className="text-2xl font-bold">Tämä on minun profiilisivu</h2>

    <p>
      <Link to="/">Navigoi takaisin etusivulle</Link>
    </p>
    <div>
      {user &&(
      <>
        <p>Käyttäjätunnus: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Luotu: {new Date(user.created_at).toLocaleString('fi-FI')}</p>
      </>
      )};

    </div>
  </div>
}
