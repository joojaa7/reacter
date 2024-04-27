import { useEffect } from 'react';
import { useUserContext } from '../contexts/UserContext';

const HandleAutoLogin = () => {
  const {handleAutoLogin} = useUserContext()

  useEffect(() => {
    handleAutoLogin()
  }, [])

  return null
};

export default HandleAutoLogin;
