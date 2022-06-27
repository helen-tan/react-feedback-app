// Components can be either classes or functions
// classes - old school way of creating components
// functions - newer way, functional components. Uses Hooks & states

function App() {
  // return JSX, a syntax that allows us to have syntactic sugar for putting HTML in JS
  // We can only return 1 main parent element
  // But if we don't want a wrapping div, so we can return an empty parent fragment <>

  const title = 'Blog Post';
  const body = 'This is my blog post';
  const comments = [
    { id: 1, text: 'Comment one'},
    { id: 2, text: 'Comment two'},
    { id: 3, text: 'Comment three'}
  ];

  // For returning JSX based on a specific condition
  const loading = true;
  const showComments = true;

  const commentBlock = (
    <div className='comments'>
    <h3>Comments ({comments.length})</h3>
    <ul>
      {comments.map((comment, index) => {
        <li key={index}>{comment.text}</li>
      })}
    </ul>
  </div>
  )

  return (
    // In JSX, class is a reserved keyword. We use className
    // In forms, for attribute in JSX is htmlFor
    <div className = 'container'>
      <h1>{title.toUpperCase()}</h1>
      <p>{body}</p>

      {/* If showComments is true show this: */}
      {showComments && commentBlock}
    </div>
  )
}

export default App;
