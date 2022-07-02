import { createContext, useState, useEffect } from 'react'

// Create context
const FeedbackContext = createContext()

// Create provider - used for wrapping whatever components that need access to the state and context
export const FeedbackProvider = ( {children} ) => {
  const [isLoading, setIsLoading] = useState(true)
  // state
  const [feedback, setFeedback] = useState([])

  // State for the feedback that is being edited
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  })

  useEffect(() => {
    fetchFeedback()
  }, [])

  // Fetch mock feedback data from db.json
  const fetchFeedback = async () => {
    const response = await fetch("/feedback?_sort=id&_order=desc")
    const data = await response.json()

    setFeedback(data)
    setIsLoading(false)
  }

  // Set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true
    });
  }

  // Functions for manipulating the feedback state
  const deleteFeedback = async (id) => {
    if(window.confirm('Are you sure you want to delete?')) {
      // Make a delete req (for backend)
      await fetch(`/feedback/${id}`, { method: 'DELETE' })

      setFeedback(feedback.filter((item) => item.id !== id)); // filter out the item we wanna delete, return array without it
    }
  };

  const addFeedback = async (newFeedback) => {
    // Add to backend
    const response = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newFeedback)
    })

    const data = await response.json()

    setFeedback([data, ...feedback])
    // As state is immutable, we cannot just push on to it
    // We need to get the current items and put it into a new array for overriding
  }

  // Update feedback item
  const updateFeedback = async (id, updItem) => {
    // update to backend
    const response = await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updItem)
    })
    const data = await response.json()

    setFeedback(feedback.map((item) => {
      if (item.id === id) {
        return { ...item, ...data }
      } else {
        return item
      }
    }))
  }

  // Whatever in value is the state that can be accessed from this Context
  return <FeedbackContext.Provider value={{
    feedback: feedback,
    feedbackEdit: feedbackEdit,
    isLoading: isLoading,
    deleteFeedback: deleteFeedback,
    addFeedback: addFeedback,
    editFeedback: editFeedback,
    updateFeedback: updateFeedback
  }}>
    {children} {/*Whatever child components that are wrapped and passed in that need access to this context */}
  </FeedbackContext.Provider>
}

export default FeedbackContext
