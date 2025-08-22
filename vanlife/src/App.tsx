import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"
import Home from './pages/Home'
import About from "./pages/About"
import "./server"
import Vans, { loader as vansLoader } from "./pages/Vans"
import VanDetail, {loader as VanDetailLoader } from "./pages/VanDetail"
import Layout from "./components/Layout"
import Dashboard from "./pages/Host/Dashboard"
import Reviews from "./pages/Host/Reviews"
import Income from "./pages/Host/Income"
import HostLayout from "./components/HostLayout"
import HostVans, {loader as HostVansLoader} from "./pages/Host/HostVans"
import HostVanDetail, {loader as HostVanDetailLoader} from "./pages/Host/HostVanDetail"
import Details from "./pages/Host/HostVanDetail/Details"
import Pricing from "./pages/Host/HostVanDetail/Pricing"
import Photos from "./pages/Host/HostVanDetail/Photos"
import NotFount404 from "./pages/NotFount404"
import Error from "./pages/Error"
import Login from "./pages/Login"

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} />
      <Route path="vans" element={<Vans />} loader={vansLoader} errorElement={<Error />} />
      <Route path="vans/:id" element={<VanDetail />} loader={VanDetailLoader} />
      {/* Host */}
      <Route path="host" element={<HostLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="income" element={<Income />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="vans" element={<HostVans />} loader={HostVansLoader} errorElement={<Error />} />

        <Route path="vans/:id" element={<HostVanDetail />} loader={HostVanDetailLoader} >
          <Route index element={<Details />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="photos" element={<Photos />} />
        </Route>

      </Route>
      <Route path="*" element={<NotFount404 />} />
    </Route>
  ))
  return (
    <RouterProvider router={router} />
  )
}

export default App
