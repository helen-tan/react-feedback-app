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
import { FeedbackProvider } from './context/FeedbackContext'

// Components can be either classes or functions
// classes - old school way of creating components
// functions - newer way, functional components. Uses Hooks & states

function App() {
  // Global state - feedback
  const [feedback, setFeedback] = useState(FeedbackData);


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
    <FeedbackProvider>
      <Router>
        <Header />
        <div className = 'container'>
          <Routes>
            <Route exact path='/' element={
              <>
                <FeedbackForm handleAdd={addFeedback}/>
                <FeedbackStats />
                <FeedbackList />
              </>
            }>
            </Route>

            {/* To create a route, use the Route component */}
            <Route path='/about' element={ <AboutPage/> } />
          </Routes>
          <AboutIconLink />
        </div>
      </ Router>
    </FeedbackProvider>
  )
}

export default App;
