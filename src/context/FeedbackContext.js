import { v4 as uuidv4 } from 'uuid'
import { createContext, useState } from 'react'

// Create context
const FeedbackContext = createContext()

// Create provider - used for wrapping whatever components that need access to the state and context
export const FeedbackProvider = ( {children} ) => {
  // state
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This is feedback item 1',
      rating: 10
    },
    {
      id: 2,
      text: 'This is feedback item 2',
      rating: 9
    },
    {
      id: 3,
      text: 'This is feedback item 3',
      rating: 7
    },
  ])

  // State for the feedback that is being edited
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  })

  // Set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true
    });
  }

  // Functions for manipulating the feedback state
  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id)); // filter out the item we wanna delete, return array without it
    }
  };

  const addFeedback = (newFeedback) => {
    // add an id wo the newFeedback object with uuid package
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
    // As state is immutable, we cannot just push on to it
    // We need to get the current items and put it into a new array for overriding
  }

  // Whatever in value is the state that can be accessed from this Context
  return <FeedbackContext.Provider value={{
    feedback: feedback,
    deleteFeedback: deleteFeedback,
    addFeedback: addFeedback,
    editFeedback: editFeedback
  }}>
    {children} {/*Whatever child components that are wrapped and passed in that need access to this context */}
  </FeedbackContext.Provider>
}

export default FeedbackContext
