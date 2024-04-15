import PropTypes from 'prop-types'

const SingleView = props => {
  const {selectedItem} = props;
  return (
    <>
      {selectedItem && (
      <img src={selectedItem.filename} alt={selectedItem.title}/>
      )};
    </>
  )
}

SingleView.propTypes = {
  selectedItem: PropTypes.object,
}

export default SingleView
