import { BrowserRouter, Routes, Route,Link } from "react-router-dom"
import Home from './components/Home'
import About from "./components/About"
import Header from "./components/Header"
function App() {
  return (
    <BrowserRouter>
      <Header about={<Link to="/about">About</Link>} home={<Link to="/">Home</Link>}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
