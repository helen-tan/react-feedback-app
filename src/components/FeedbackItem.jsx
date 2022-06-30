import { FaTimes, FaEdit } from 'react-icons/fa'
import { useContext } from 'react'
import PropTypes from 'prop-types'
import Card from './shared/Card'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackItem({ item }) {
  const {deleteFeedback} = useContext(FeedbackContext)

  // useState is a function and it takes whatever default we want for that piece of state
  // [] is destructuring whatever array the useState function returns
  // There are 2 things we need to put in the []
  // [The name of the state, the function to update the piece of state (usually called setSmth) ]

  // Activate when x icon is clicked - delete feedback item
  // but items are not in this component, but the App.js
  // to affect the items in App.js, we need to go upwards - put handleDelete prop in FeedbackList component


  return (
    <Card>
      <div className="num-display">{item.rating}</div>

      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color='purple'/>
      </button>

      <button className="edit">
        <FaEdit color='purple' />
      </button>

      <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default FeedbackItem;
