import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const HostLayout = () => {
  return (
    <>
        <nav>
            <Link className='px-7' to="/host">Dashboard</Link>
            <Link className='px-7' to="/host/reviews">Reviews</Link>
            <Link className='px-7' to="/host/income">Income</Link>
            <Outlet />
        </nav>
    </>
  )
}

export default HostLayout