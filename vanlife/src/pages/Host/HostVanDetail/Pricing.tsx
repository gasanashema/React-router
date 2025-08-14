import React from 'react'

import { useOutletContext } from 'react-router-dom'
const Pricing = () => {
        const {currentVan} = useOutletContext()
    
  return (
    <h3 className="text-2xl font-bold">
    ${currentVan.price}
    <span className="text-lg font-medium text-gray-600">/day</span>
</h3>

  )
}

export default Pricing