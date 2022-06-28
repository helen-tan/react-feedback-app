import {useState} from 'react'
import Card from "./shared/Card"

function FeedbackForm() {
  // When we have a form, we typically have a component-level state for each input
  const [text, setText] = useState('');
  // connect the state to the input value - use event listener onChange in the input

  // create onChange event handler - handleTextChange: changes the 'text' state
  const handleTextChange = (e) => {
    setText(e.target.value);
  }

  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        {/*@todo - rating select component*/}
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
            />
          <button type="submit">Send</button>
        </div>
      </form>
    </Card>
  )
}

export default FeedbackForm