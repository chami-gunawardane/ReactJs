import './App.css'

//Card Component
const Card = () => {
  return (
    <div>
     <h2>Card component</h2>
    </div>
  )
}

//App Component
const App = () => {
  return (
    // React Fragment
    <>
        <h2>Functional Arrow Component</h2>
        <Card /> {/* Using card component inside App component */}
    </>
  )
}

export default App