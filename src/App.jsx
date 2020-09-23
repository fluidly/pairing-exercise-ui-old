import React, { useState, useEffect } from 'react'
import './App.css'

const App = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('/clients')
      .then((res) => res.json())
      .then((body) => setData(body.data))
      .catch(console.log)
  }, [])

  return (
    <div className="App">
      <p>Hello world!</p>
      <pre>{data && data[0].name}</pre>
    </div>
  )
}

export default App
