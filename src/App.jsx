import './App.css'

// Card Component with props
const Card = ({ title, rating, isAvailable }) => {
  return (
    <div>
      <h2>{title}</h2>

      {/* New numeric prop */}
      <p>Rating: {rating}</p>

      {/* New boolean prop */}
      <p>Available: {isAvailable ? "Yes" : "No"}</p>
    </div>
  )
}


// App Component
const App = () => {
  return (
    <>
      <h2>Functional Arrow Component</h2>

      {/* Using card component inside App component */}
      <Card title="Star Wars" rating={9.5} isAvailable={true} />
      <Card title="Avatar" rating={8.2} isAvailable={false} />
      <Card title="The Lion King" rating={9.0} isAvailable={true} />
    </>
  )
}


export default App