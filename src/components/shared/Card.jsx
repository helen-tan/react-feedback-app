import PropTypes from 'prop-types';

function Card({ children, reverse }) {
  //return (
    // conditional classes - uf reverse prop is true, add the class 'reverse'
  //  <div className={`card ${reverse && 'reverse'}`}>
  //    {children}
  //  </div>
  //)

  // conditional styles
  return <div className='card' style={{
    backgroundColor: reverse ? 'rgba(0, 0, 0, 0.4)' : '#fff',
    color: reverse ? '#fff' : '#000'
   }}>
    {children}
  </div>
}

Card.defaultProps = {
  reverse: false
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool
}

export default Card
