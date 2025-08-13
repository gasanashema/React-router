import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const Vans = () => {
    const [vans, setVans] = useState([])
    useEffect(() => {
        fetch('/api/vans').then(res => res.json()).then(res => setVans(res.vans)).catch(e => console.log(e));
    }, []);
    const vanElements = vans.map(van => (
        <div key={van.id} className="van-tile">
            <Link to={`/vans/${van.id}`} aria-label={`View details for ${van.name}, priced at $${van.price} per day`}>
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

    return (
        <div className="px-[23px]">
            <h1 className="text-3xl font-bold">Explore Our Vans Options</h1>
            <div className="grid grid-cols-4 justify-items-center gap-[34px] mt-[57px]">
                {vanElements}
            </div>
        </div>
    );

}

export default Vans