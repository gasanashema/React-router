import { BrowserRouter, Routes, Route,Link } from "react-router-dom"
import Home from './components/Home'
import About from "./components/About"
function App() {
  return (
    <BrowserRouter>
    <nav className="flex justify-center items-center bg-white py-4 px-6">
      <Link className="text-gray-600 hover:text-gray-900 font-medium py-2 px-4" to='/'>Home</Link>
      <Link className="text-gray-600 hover:text-gray-900 font-medium py-2 px-4" to='/about'>About</Link>
    </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
