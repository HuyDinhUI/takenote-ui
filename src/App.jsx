import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { MainLayout } from './layouts/mainLayout'
import { Main } from './pages/Main'
import { Login } from './pages/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<MainLayout><Main/></MainLayout>}/>
          <Route path='/login' element={<Login/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
