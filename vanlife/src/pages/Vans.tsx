import { useEffect, useState } from "react"
import { Link, useLoaderData, useSearchParams } from "react-router-dom";
import { getVans } from "../api";

export async function loader() {
    const vans = await getVans();
    return vans;
}

const Vans = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [error, setError] = useState(null)
    const vans = useLoaderData();
 
    const searchFilert = searchParams.get('type');
    const displayedVans = searchFilert ? vans.filter(van => van.type === searchFilert) : vans
    const vanElements = displayedVans.map(van => (
        <div key={van.id} className="van-tile">
            <Link to={van.id} state={{ search: searchParams.toString() }} aria-label={`View details for ${van.name}, priced at $${van.price} per day`}>
                <img
                    src={van.imageUrl}
                    className="max-w-full rounded-md"
                    alt={`Image of ${van.name}`}
                />
                <div className="van-info">
                    <h3 className="text-[#161616]">{van.name}</h3>
                    <p className="text-[#161616]">
                        ${van.price}
                        <span className="text-[#4D4D4D]">/day</span>
                    </p>
                </div>
                <i
                    className={`
                px-6 py-1.5 h-[34px] font-medium rounded-md border-none transition-colors duration-200 ease-in-out
                ${van.type === "simple" ? "bg-[#FFEAD0] text-[#4D4D4D] hover:bg-[#E17654] hover:text-[#FFEAD0]" : ""}
                ${van.type === "rugged" ? "bg-[#FFEAD0] text-[#4D4D4D] hover:bg-[#115E59] hover:text-[#FFEAD0]" : ""}
                ${van.type === "luxury" ? "bg-[#FFEAD0] text-[#4D4D4D] hover:bg-[#161616] hover:text-[#FFEAD0]" : ""}
                selected
            `}
                >
                    {van.type}
                </i>
            </Link>
        </div>

    ));
    if (error) {
        return <h1 aria-live="assertive">There was an error: {error.message}</h1>
    }

    return (
        <div className="px-[23px]">
            <h1 className="text-3xl font-bold">Explore Our Vans Options</h1>
            <div className="flex space-x-5">
                <button
                    onClick={() => setSearchParams({ type: 'simple' })}
                    className={`h-[34px] px-6 py-1.5 rounded font-medium  hover:bg-[#E17654] hover:text-amber-100 transition duration-200 ${searchFilert === 'simple' ? 'bg-[#E17654] text-amber-100' : 'bg-amber-100 text-gray-700'}`}
                >
                    Simple
                </button>

                <button
                    onClick={() => setSearchParams({ type: 'luxury' })}
                    className={`h-[34px] px-6 py-1.5 rounded font-medium  hover:bg-black hover:text-amber-100 transition duration-200 ${searchFilert === 'luxury' ? 'bg-black text-amber-100' : 'bg-amber-100 text-gray-700'}`}
                >
                    Luxury
                </button>

                <button
                    onClick={() => setSearchParams({ type: 'rugged' })}
                    className={`h-[34px] px-6 py-1.5 rounded font-medium hover:bg-teal-800 hover:text-amber-100 transition duration-200 ${searchFilert === 'rugged' ? 'bg-teal-800 text-amber-100' : 'bg-amber-100 text-gray-700'}`}
                >
                    Rugged
                </button>
                {searchFilert ? (
                    <button
                        onClick={() => setSearchParams({})}
                        className="h-[34px] px-6 py-1.5 rounded font-medium underline bg-transparent text-gray-700"
                    >
                        Clear filter
                    </button>
                ) :
                    ''}

            </div>

            <div className="grid grid-cols-4 justify-items-center gap-[34px] mt-[57px]">
                {vanElements}
            </div>
        </div>
    );

}

export default Vans