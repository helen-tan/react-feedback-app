import {useState} from 'react'
import RatingSelect from './RatingSelect'
import Card from "./shared/Card"
import Button from "./shared/Button"

function FeedbackForm({ handleAdd }) {
  // When we have a form, we typically have a component-level state for each input
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true) // true by default - btn should be disabled when page first loads
  const [message, setMessage] = useState('')

  // connect the state to the input value - use event listener onChange in the input
  // create onChange event handler - handleTextChange
  const handleTextChange = (e) => {
    // validation to run when we type something
    if (text === '') {
      setBtnDisabled(true)
      setMessage(null) // message to only show when we are typing & less than 10 chars
    } else if (text !== '' && text.trim().length <= 10) {
      setBtnDisabled(true)
      setMessage('Text must be at least 10 characters')
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }

    // update the 'text' state
    setText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // validation
    if(text.trim().length > 10) {
      const newFeedback = {
        text: text,
        rating: rating
      }

      // pass newFeedback up to App.js via handleAdd prop
      handleAdd(newFeedback)

      // After submitting, set the text to an empty string
      setText('')
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>

        <RatingSelect select={(rating) => setRating(rating)} />

        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
            />
          <Button type="submit" isDisabled={btnDisabled}>Send</Button>
        </div>

        {/*If there is a message, display it */}
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
