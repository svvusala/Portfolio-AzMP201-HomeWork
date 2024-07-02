import { useState } from 'react'
import "./components/style.css"
import Counter from './components/Counter'
import Calculator from './components/Calculator'
import TodoApp from './components/TodoApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Counter count={count} setCount={setCount} />
     <Calculator/>
     <TodoApp />
    </>
  )
}

export default App
