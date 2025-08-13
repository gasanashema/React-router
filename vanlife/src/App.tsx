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
import HostVans from "./pages/Host/HostVans"
function App() {
  return (
    <BrowserRouter>
     
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />
          {/* Host */}
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />
          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
