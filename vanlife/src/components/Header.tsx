import { NavLink } from "react-router-dom"
const Header = () => {
  return (
          <header className="bg-[#FFF7ED]">
  <nav className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">

    <NavLink to="/" className="text-2xl font-bold text-gray-900">
      #VANLIFE
    </NavLink>

   
    <div className="flex space-x-6">
      <NavLink
        to="/host"
        className={({ isActive }: { isActive: boolean }) =>
           isActive ? "hover:text-gray-900 font-semibold text-amber-700" : "text-gray-700 hover:text-gray-900 font-semibold"
        }
      >
        Hosts
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }: { isActive: boolean }) =>
           isActive ? "hover:text-gray-900 font-semibold text-amber-700" : "text-gray-700 hover:text-gray-900 font-semibold"
        }
      >
        About
      </NavLink>
      <NavLink
        to="/vans"
        className={({ isActive }: { isActive: boolean }) =>
           isActive ? "hover:text-gray-900 font-semibold text-amber-700" : "text-gray-700 hover:text-gray-900 font-semibold"
        }
      >
        Vans
      </NavLink>
    </div>
  </nav>
</header>

  )
}

export default Header