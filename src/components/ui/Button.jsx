import PropTypes from 'prop-types'

const Button = props => {
  const {text, handleClick} = props;
  return (
  <button
    className='m-3 mt-0 p-3 rounded-lg bg-stone-500 text-stone-100'
    onClick={handleClick}>
    {text}
  </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
}

export default Button
