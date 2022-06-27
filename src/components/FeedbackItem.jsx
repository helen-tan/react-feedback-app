import { useState } from 'react';

function FeedbackItem() {
  // useState is a function and it takes whatever default we want for that piece of state
  // [] is destructuring whatever array the useState function returns
  // There are 2 things we need to put in the []
  // [The name of the state, the function to update the piece of state (usually called setSmth) ]
  const [rating, setRating] = useState(7);
  const [text, setText] = useState('This is an example of a feedback item');

  const handleClick = () => {
    // We can't say rating = 10, because state in React is immutable
    // We can access the previous argument by passing a prev argument
    setRating((prev) => {
      console.log(prev);
      return prev + 1;
    });
  }

  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <div className="text-display">
        {text}
      </div>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default FeedbackItem
