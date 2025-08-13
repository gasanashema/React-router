import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const HostLayout = () => {
  return (
    <>
        <nav>
            <NavLink
                className={({ isActive }) =>
                    `px-7${isActive ? ' text-blue-600 font-bold' : ''}`
                }
                end
                to="/host"
            >
                Dashboard
            </NavLink>
            <NavLink
                className={({ isActive }) =>
                    `px-7${isActive ? ' text-blue-600 font-bold' : ''}`
                }
                to="/host/income"
            >
                Income
            </NavLink>
            <NavLink
                className={({ isActive }) =>
                    `px-7${isActive ? ' text-blue-600 font-bold' : ''}`
                }
                to="/host/vans"
            >
                vans
            </NavLink>
            <NavLink
                className={({ isActive }) =>
                    `px-7${isActive ? ' text-blue-600 font-bold' : ''}`
                }
                to="/host/reviews"
            >
                Reviews
            </NavLink>
            <Outlet />
        </nav>
    </>
  )
}

export default HostLayout