import PropTypes from 'prop-types'

// When we pass a prop to a component, we need to catch it in the parameters: function Header(props)
// destructure it with curly braces
function Header({ text }) {
  return (
    <header>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  )
}

// When no props are passed in, it will use whatever the deafult is
Header.defaultProps = {
  text: 'Feedback UI'
}

// Type checking for props passed in
Header.propTypes = {
  text: PropTypes.string
}

export default Header
