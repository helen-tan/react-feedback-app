import PropTypes from 'prop-types';
import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedback }) {
  // If the feedback app level state is empty
  if(!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>
  }

  return (
    <div className="feedback-list">
      {feedback.map((item) => {
        return <FeedbackItem key={item.id} item={item} />
      })}
    </div>
  )
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired
      }
    )
  )
}

export default FeedbackList
