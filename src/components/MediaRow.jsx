import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const MediaRow = ({item}) => (
  <tr>
    <td>
      <img src={item.thumbnail} alt={item.title} />
    </td>
    <td>{item.username}</td>
    <td>{item.title}</td>
    <td>{item.description}</td>
    <td>{new Date(item.created_at).toLocaleString('fi-FI')}</td>
    <td>{item.filesize}</td>
    <td>{item.media_type}</td>
    <td>
      <Link to={`/media/${item.media_id}`} state={{item}}>
        View linkki
      </Link>
    </td>
  </tr>
);

MediaRow.propTypes = {
  item: PropTypes.object.isRequired,
};

export default MediaRow;
