import PropTypes from 'prop-types';
import Button from './UI/Button';

const SingleView = (props) => {
  const { selectedItem, setSelectedItem } = props;
  const handleClick = () => {
    setSelectedItem(null);
  };
  return (
    <dialog
      className="fixed top-0 h-dvh w-dvw bg-black bg-opacity-50 p-4 text-stone-100"
      open={selectedItem ? true : false}
    >
      <p>
        <Button text="Close" handleClick={handleClick} />
      </p>
      {selectedItem && (
        <>
          {selectedItem.media_type.includes('video') ? (
            <video className="m-auto h-3/4 content-center" controls>
              <source
                src={selectedItem.filename}
                type={selectedItem.media_type}
              />
            </video>
          ) : (
            <img
              className="m-auto h-3/4"
              src={selectedItem.filename}
              alt={selectedItem.title}
            />
          )}
          <h2>{selectedItem.title}</h2>
          <p>{selectedItem.description}</p>
          <p>Created: {new Date(selectedItem.created_at).toLocaleString()}</p>
          <p>Size: {selectedItem.filesize}</p>
        </>
      )}
    </dialog>
  );
};

SingleView.propTypes = {
  selectedItem: PropTypes.object,
  setSelectedItem: PropTypes.func.isRequired,
};

export default SingleView;
