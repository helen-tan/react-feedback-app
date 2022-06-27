import Header from "./components/Header"
import FeedbackItem from "./components/FeedbackItem"

// Components can be either classes or functions
// classes - old school way of creating components
// functions - newer way, functional components. Uses Hooks & states

function App() {
  // return JSX, a syntax that allows us to have syntactic sugar for putting HTML in JS
  // We can only return 1 main parent element
  // But if we don't want a wrapping div, so we can return an empty parent fragment <>

  return (
    // In JSX, class is a reserved keyword. We use className
    // In forms, for attribute in JSX is htmlFor
    <>
      <Header />
      <div className = 'container'>
        <FeedbackItem/>
      </div>
    </>
  )
}

export default App;
