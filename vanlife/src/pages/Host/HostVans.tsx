import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const HostVans = () => {
    const [vans,setVans] = useState([]);
    useEffect(() => {
        fetch("/api/host/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    },[]);
   return (
        <section>
            <h1 className="px-[26px] text-xl font-semibold">Your listed vans</h1>
            <div className="px-[26px]">
                {vans.length > 0 ? (
                    <section>{vans.map(van => (
        <Link
            to={`/host/vans/${van.id}`}
            key={van.id}
            className="no-underline text-inherit"
        >
            <div className="flex items-center bg-white mb-4 py-[18px] pl-6">
                <img
                    src={van.imageUrl}
                    alt={`Photo of ${van.name}`}
                    className="h-[70px] rounded mr-[17px]"
                />
                <div>
                    <h3 className="text-[20px] font-semibold my-[10px]">{van.name}</h3>
                    <p className="my-[10px]">${van.price}/day</p>
                </div>
            </div>
        </Link>
    ))}</section>
                ) : (
                    <h2>Loading...</h2>
                )}
            </div>
        </section>
    )
}

export default HostVans