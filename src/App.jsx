import './App.css'
import Home from './pages/Home'
import Admin from './pages/Admin'
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/admin' element={<Admin />} />
    </Routes>
  )
}

export default App
