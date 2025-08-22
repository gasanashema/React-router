import { Link, NavLink, Outlet, useLoaderData, useParams } from "react-router-dom"
import { getHostVans } from "../../api";

export const loader = ({params})=>{
  return getHostVans(params.id)
}

const HostVanDetail = () => {
  const currentVan = useLoaderData();

  return (
    <section>
      <Link
        to=".."
        relative='path'
        className="px-16"
      >&larr; <span>Back to all vans</span></Link>
      <div className="bg-white p-6 my-[30px] mx-[26px]">
        <div className="flex items-center">
          <img
            src={currentVan.imageUrl}
            alt={currentVan.name}
            className="h-[160px] rounded mr-5"
          />
          <div>
            <i
              className={`van-type van-type-${currentVan.type}`}
            >
              {currentVan.type}
            </i>
            <h3 className="mt-6 mb-[5px] text-[26px] font-bold">
              {currentVan.name}
            </h3>
            <h4 className="text-[20px] m-0">
              ${currentVan.price}/day
            </h4>
          </div>
        </div>
        <nav className='flex justify-center'>
            <NavLink
                className={({ isActive }) =>
                    `px-7 ${isActive ? ' text-blue-600 font-bold px-6' : 'px-6'}`
                }
                end
                to="."
            >
                Details
            </NavLink>
            <NavLink
                className={({ isActive }) =>
                    `px-7 ${isActive ? ' text-blue-600 font-bold px-6' : 'px-6'}`
                }
                to="pricing"
            >
                Pricing
            </NavLink>
            <NavLink
                className={({ isActive }) =>
                    `px-7 ${isActive ? ' text-blue-600 font-bold px-6' : 'px-6'}`
                }
                to="photos"
            >
                Photos
            </NavLink>
           
        </nav>
        <Outlet context={{currentVan}}/>
      </div>

      
    </section>

  )
}

export default HostVanDetail