import {useEffect, useState} from 'react';
import MediaRow from '../components/MediaRow';
import { fetchData } from '../lib/fetchData';
//import mediaArray from '../data/media';

const Home = () => {
  // const [selectedItem, setSelectedItem] = useState(null);
  const [mediaArray, setMediaArray] = useState([]);


  const getMedia = async () => {
    const mediaResult = await fetchData(import.meta.env.VITE_MEDIA_API + '/media');

    const mediaWithUser = await Promise.all(mediaResult.map(async media => {
      const userResult = await fetchData(import.meta.env.VITE_AUTH_API + '/users/' + media.user_id);
      return {...media, username: userResult.username};
    }));
    setMediaArray(mediaWithUser);
  };

  useEffect(() => {
    getMedia();
  }, [])

  return (
    <>
      <h2>My Media</h2>
      <table>
        <thead>
          <tr>
            <th>Thumbnail</th>
            <ht>Owner</ht>
            <th>Title</th>
            <th>Description</th>
            <th>Created</th>
            <th>Size</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {mediaArray.map((item) => (
            <MediaRow
              key={item.media_id}
              item={item}
              // setSelectedItem={setSelectedItem}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Home;
