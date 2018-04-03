import React from 'react'
import ReactDOM from 'react-dom'

import Home from './components/Home'
import Test from './components/Test'

function App() {
  return (
    <div>
      <Home />
      <Test />
    </div>
  ) 
}


ReactDOM.render(<App />, document.getElementById('root'))


