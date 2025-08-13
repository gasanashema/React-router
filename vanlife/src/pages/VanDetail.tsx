import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const VanDetail = () => {
    const params = useParams();
    const [van, setVan] = useState(null);
    useEffect(() => {
        fetch(`/api/vans/${params.id}`).then(res => res.json()).then(data => setVan(data.vans));
    }, [params.id])
    return (
       <div className="p-[27px]">
  {van ? (
    <div className="flex flex-col text-[#161616]">
      <img
        src={van.imageUrl}
        alt={van.name}
        className="rounded-md my-[47px]"
      />
      <i
        className={`px-[14px] py-[7px] self-start van-type ${van.type} selected`}
      >
        {van.type}
      </i>
      <h2 className="text-[2rem] mb-[10px]">{van.name}</h2>
      <p className="text-[1.25rem] mb-[10px]">
        <span className="font-bold text-[1.5rem]">${van.price}</span>/day
      </p>
      <p>{van.description}</p>
      <button className="bg-[#FF8C38] text-white text-[1.125rem] px-4 py-2 rounded">
        Rent this van
      </button>
    </div>
  ) : (
    <h2>Loading...</h2>
  )}
</div>

    )
}

export default VanDetail