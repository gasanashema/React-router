import { Link, useRouteError } from "react-router-dom"

const Error = () => {
    const error = useRouteError();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="text-center max-w-lg">
        <h1 className="text-9xl font-extrabold text-gray-800 tracking-widest">{error.status}</h1>
        <p className="text-2xl md:text-3xl font-bold mt-6">⚠ {error.statusText} ⚠</p>
        

        <div className="mt-8 flex gap-4 justify-center">
          <Link
            to="/"
            className="px-6 py-3 bg-indigo-600 text-white text-sm font-medium rounded-xl shadow hover:bg-indigo-700 transition"
          >
            Back to Home
          </Link>
         
        </div>
      </div>
    </div>
  )
}

export default Error