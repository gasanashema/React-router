import React from 'react'
import { useOutletContext } from 'react-router-dom'
const Details = () => {
    const {currentVan} = useOutletContext()
    
  return (
   <section className="bg-white p-6 rounded shadow mt-6">
    <h4 className="text-lg font-semibold mb-2">
        Name: <span className="font-normal text-gray-700">{currentVan.name}</span>
    </h4>
    <h4 className="text-lg font-semibold mb-2">
        Category: <span className="font-normal text-gray-700 capitalize">{currentVan.type}</span>
    </h4>
    <h4 className="text-lg font-semibold mb-2">
        Description: <span className="font-normal text-gray-700">{currentVan.description}</span>
    </h4>
    <h4 className="text-lg font-semibold">
        Visibility: <span className="font-normal text-green-600">Public</span>
    </h4>
</section>

  )
}

export default Details