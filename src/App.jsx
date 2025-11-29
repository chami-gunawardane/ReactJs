import { useState } from 'react'
import './App.css'

// Card Component with props
const Card = ({ title, rating, isAvailable }) => {
  
    const [hasLiked, setHasLiked] = useState(false);

  return (
    //inline styling
    <div className='card' 
    // style={{
    //   border : '1px solid #4b5362',
    //   padding : '20px',
    //   margin : '10px',
    //   backgroundColor : '#31363f',
    //   borderRadius : '10px',
    //   minHeight : '100px',
    // }}
    >
      <h2>{title}</h2>

      {/* New numeric prop */}
      <p>Rating: {rating}</p>

      {/* New boolean prop */}
      <p>Available: {isAvailable ? "Yes" : "No"}</p>

      {/* toggle like button */}
      <button onClick={() => setHasLiked(!hasLiked)}>
        { hasLiked ? "Liked!" : "Like" }
      </button>
    </div>
  )
}


// App Component
const App = () => {
  return (
    <>
      <h2>Functional Arrow Component</h2>

      <div className='card-container'>
      {/* Using card component inside App component */}
      <Card title="Star Wars" rating={9.5} isAvailable={true} />
      <Card title="Avatar" rating={8.2} isAvailable={false} />
      <Card title="The Lion King" rating={9.0} isAvailable={true} />
      </div>
    </>
  )
}


export default App