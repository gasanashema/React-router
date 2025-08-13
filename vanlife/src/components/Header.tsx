import { Link } from "react-router-dom"
const Header = () => {
  return (
          <header className="bg-[#FFF7ED]">
  <nav className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">

    <Link to="/" className="text-2xl font-bold text-gray-900">
      #VANLIFE
    </Link>

   
    <div className="flex space-x-6">
      <Link to="/about" className="text-gray-700 hover:text-gray-900 font-medium">About</Link>
      <Link to="/vans" className="text-gray-700 hover:text-gray-900 font-medium">Vans</Link>
    </div>
  </nav>
</header>

  )
}

export default Header