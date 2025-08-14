import { NavLink, Outlet,Link } from 'react-router-dom'

const HostLayout = () => {
  return (
    <>
        <nav className='flex justify-center'>
            <NavLink
                className={({ isActive }) =>
                    `px-7 ${isActive ? ' text-blue-600 font-bold px-6' : 'px-6'}`
                }
                end
                to="/host"
            >
                Dashboard
            </NavLink>
            <NavLink
                className={({ isActive }) =>
                    `px-7 ${isActive ? ' text-blue-600 font-bold px-6' : 'px-6'}`
                }
                to="income"
            >
                Income
            </NavLink>
            <NavLink
                className={({ isActive }) =>
                    `px-7 ${isActive ? ' text-blue-600 font-bold px-6' : 'px-6'}`
                }
                to="vans"
            >
                vans
            </NavLink>
            <NavLink
                className={({ isActive }) =>
                    `px-7 ${isActive ? ' text-blue-600 font-bold px-6' : 'px-6'}`
                }
                to="reviews"
            >
                Reviews
            </NavLink>
        </nav>
        
            <Outlet />
    </>
  )
}

export default HostLayout