import { useState } from 'react'
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import FeedbackData from './data/FeedbackData'

// Components can be either classes or functions
// classes - old school way of creating components
// functions - newer way, functional components. Uses Hooks & states

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  // deleteFeedback is here in App.js bcos here is where we have our feedback state and setFeedback function
  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id)); // filter out the item we wanna delete, return array without it
    }
  };

  const addFeedback = (newFeedback) => {
    console.log(newFeedback)
  }

  // return JSX, a syntax that allows us to have syntactic sugar for putting HTML in JS
  // We can only return 1 main parent element
  // But if we don't want a wrapping div, so we can return an empty parent fragment <>

  return (
    // In JSX, class is a reserved keyword. We use className
    // In forms, for attribute in JSX is htmlFor
    <>
      <Header />
      <div className = 'container'>
        <FeedbackForm handleAdd={addFeedback}/>
        <FeedbackStats feedback={feedback}/>
        <FeedbackList feedback={feedback}
        handleDelete = {deleteFeedback} />
      </div>
    </>
  )
}

export default App;
