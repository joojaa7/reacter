import PropTypes from 'prop-types'
import Button from './ui/Button';

const SingleView = props => {
  const {selectedItem, setSelectedItem} = props;
  const handleClick = () => {
    setSelectedItem(null);
  }
  return (
    <>
      <dialog open={selectedItem ? true : false}>
        <p>
          <Button text='Close' handleClick={handleClick}/>
        </p>
        {selectedItem && (
          <>
            {selectedItem.media_type.includes('video') ? (
              <video controls>
                <source
                  src={selectedItem.filename}
                  type={selectedItem.media_type} />
              </video>
              ) : (
            <img src={selectedItem.filename} alt={selectedItem.title}/>
            )}
          </>
        )}
      </dialog>
    </>
  )
}

SingleView.propTypes = {
  selectedItem: PropTypes.object,
  setSelectedItem: PropTypes.func.isRequired,
}

export default SingleView
