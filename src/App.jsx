import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { DefaultLayout } from './layouts/defaultLayout'
import { Main } from './pages/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<DefaultLayout><Main/></DefaultLayout>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
