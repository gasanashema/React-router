import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Photos = () => {
        const {currentVan} = useOutletContext()
    
  return (
    <img
    src={currentVan.imageUrl}
    alt={currentVan.name}
    className="h-[200px] rounded mr-5"
/>

  )
}

export default Photos