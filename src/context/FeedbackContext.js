import { createContext, useState } from 'react'

// Create context
const FeedbackContext = createContext()

// Create provider - used for wrapping whatever components that need access to the state and context
export const FeedbackProvider = (children) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This item is from context',
      rating: 10
    }
  ])

  return <FeedbackContext.Provider value={{
    feedback: feedback
  }}>
    {children} {/*Whatever child components that are wrapped and passed in that need access to this context */}
  </FeedbackContext.Provider>
}

export default FeedbackContext
