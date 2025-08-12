import { BrowserRouter, Routes, Route,Link } from "react-router-dom"
import Home from './components/Home'
import About from "./components/About"
function App() {
  return (
    <BrowserRouter>
        <header className="bg-gray-100">
  <nav className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">

    <Link to="/" className="text-2xl font-bold text-gray-900">
      #VANLIFE
    </Link>

   
    <div className="flex space-x-6">
      <Link to="/about" className="text-gray-700 hover:text-gray-900 font-medium">About</Link>
      <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Vans</a>
    </div>
  </nav>
</header>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
