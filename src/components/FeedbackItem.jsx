import { useState } from 'react';

function FeedbackItem({item}) {
  // useState is a function and it takes whatever default we want for that piece of state
  // [] is destructuring whatever array the useState function returns
  // There are 2 things we need to put in the []
  // [The name of the state, the function to update the piece of state (usually called setSmth) ]

  return (
    <div className="card">
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
    </div>
  )
}

export default FeedbackItem;
