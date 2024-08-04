import { useState } from 'react'
import './App.css'
import Container from './components/Container/Container'

function App() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  const increment1 = () => {
    setCount1(count1 + 1);
  }

  const increment2 = () => {
    setCount2(count2 + 1);

  }

  return (
    <div className="AppContainer">
      <Container count={count1} incrementFunction={increment2   } />
      <Container count={count2} incrementFunction={increment1} />
    </div>
  )
}

export default App
