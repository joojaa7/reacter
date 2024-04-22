import {useEffect, useState} from 'react';
import {fetchData} from '../lib/fetchData';

const useMedia = () => {
  const [mediaArray, setMediaArray] = useState([]);
  const {getUserById} = useUser();
  const getMedia = async () => {
    const mediaResult = await fetchData(
      import.meta.env.VITE_MEDIA_API + '/media',
    );

    const mediaWithUser = await Promise.all(
      mediaResult.map(async (media) => {
        const userResult = await getUserById(media.user_id);
        return {...media, username: userResult.username};
      }),
    );
    setMediaArray(mediaWithUser);
  };

  useEffect(() => {
    getMedia();
  }, []);
  return {mediaArray};
};

const useUser = () => {
  const getUserById = async (id) => {
    const userResult = await fetchData(
      import.meta.env.VITE_AUTH_API + '/users/' + id,
    );
    return userResult;
  };
  return {getUserById};
};

const useAuthentication = () => {
  const login = async (inputs) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    };

    const loginResult = await fetchData(
      import.meta.env.VITE_AUTH_API + '/auth/login',
      options,
    );
    return loginResult;
  };
  return {login};
};

export {useMedia, useUser, useAuthentication};
