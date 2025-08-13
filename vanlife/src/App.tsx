import { BrowserRouter, Routes, Route, useSearchParams } from "react-router-dom"
import Home from './pages/Home'
import About from "./pages/About"
import "./server"
import Vans from "./pages/Vans"
import VanDetail from "./pages/VanDetail"
import Layout from "./components/Layout"
import Dashboard from "./pages/Host/Dashboard"
import Reviews from "./pages/Host/Reviews"
import Income from "./pages/Host/Income"
import HostLayout from "./components/HostLayout"
function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans">
            <Route index element={<Vans />} />
            <Route path=":id" element={<VanDetail />} />
          </Route>
          {/* Host */}
          <Route path="/host" element={<HostLayout />} >
            <Route index element={<Dashboard />} />
            <Route path="/host/reviews" element={<Reviews />} />
            <Route path="/host/income" element={<Income />} />
          </Route>
        </Route>

      </Routes>
    </BrowserRouter >
  )
}

export default App
