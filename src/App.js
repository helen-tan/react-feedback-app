import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutIconLink from './components/AboutIconLink'
import FeedbackData from './data/FeedbackData'
import AboutPage from './pages/AboutPage'

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
    // add an id wo the newFeedback object with uuid package
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
    // As state is immutable, we cannot just push on to it
    // We need to get the current items and put it into a new array for overriding
  }

  // return JSX, a syntax that allows us to have syntactic sugar for putting HTML in JS
  // We can only return 1 main parent element
  // But if we don't want a wrapping div, so we can return an empty parent fragment <>

  return (
    // In JSX, class is a reserved keyword. We use className
    // In forms, for attribute in JSX is htmlFor
    <Router>
      <Header />
      <div className = 'container'>
        <Routes>
          <Route exact path='/' element={
            <>
              <FeedbackForm handleAdd={addFeedback}/>
              <FeedbackStats feedback={feedback}/>
              <FeedbackList feedback={feedback}
              handleDelete = {deleteFeedback} />
            </>
          }>
          </Route>

          {/* To create a route, use the Route component */}
          <Route path='/about' element={ <AboutPage/> } />
        </Routes>
        <AboutIconLink />
      </div>
    </ Router>
  )
}

export default App;
