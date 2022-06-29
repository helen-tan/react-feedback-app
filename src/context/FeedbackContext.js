import { createContext, useState } from 'react'

// Create context
const FeedbackContext = createContext()

// Create provider - used for wrapping whatever components that need access to the state and context
export const FeedbackProvider = ( {children} ) => {
  // state
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This item is from context',
      rating: 10
    }
  ])

  // Functions for manipulating the feedback state
  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id)); // filter out the item we wanna delete, return array without it
    }
  };


  // Whatever in value is the state that can be accessed from this Context
  return <FeedbackContext.Provider value={{
    feedback: feedback,
    deleteFeedback: deleteFeedback
  }}>
    {children} {/*Whatever child components that are wrapped and passed in that need access to this context */}
  </FeedbackContext.Provider>
}

export default FeedbackContext
