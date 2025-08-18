import React from 'react'
import { Link } from 'react-router-dom'

const NotFount404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  text-center px-4">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">Page Not Found</h2>
      <p className="text-gray-500 mb-8">The page you are looking for doesn’t exist or has been moved.</p>
      <Link
        to="/"
        className="px-6 py-3 bg-[#FF8C38] text-white rounded-2xl shadow-md hover:bg-blue-700 transition duration-300"
      >
        Back to Home
      </Link>
    </div>
  )
}

export default NotFount404
