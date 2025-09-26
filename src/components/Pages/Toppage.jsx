import React from 'react'
import { NavLink } from 'react-router-dom'
import { CIcon } from "@coreui/icons-react";
import { cilLocationPin } from "@coreui/icons";

export const cards =[
     
  
]

const Toppage = ({imageUrl, articleLocation, articleBody, articleHead, altText, articleImg, openingText, header, subHeader}) => {
  return (
    <>
    <div className="flex flex-col">
      {/* Header Section */}
      <div className="flex flex-col text-center">
        <h1 className="text-4xl font-bold">{header}</h1>
        <p className="text-lg text-gray-700 mb-10">{subHeader}</p>
        <img src={imageUrl} alt={altText} className="rounded-lg" />
        
        <div className=''>
          <p className="text-gray-600 lg:px-16 p-2 leading-relaxed flex">{openingText}</p>
        </div>
        
      </div>

      {/* Article Section */}
      <div className="flex flex-col gap-4">
        <img src={articleImg} alt={articleHead} className="rounded-lg" />
        <h2 className="text-3xl font-bold">{articleHead}</h2>
        <p className="text-gray-700">{articleBody}</p>
      </div>

      <div className='mt-4 flex'>
        <a href={articleLocation} className='flex'>
          <p>Directions</p><CIcon className="h-7 ml-2" icon={cilLocationPin} size=""/>
        </a>
      </div>
    </div>
      
    </>
  )
}

export default Toppage
