import React from 'react'
import { NavLink } from 'react-router-dom'
import Footer from '../Footer'

export const cards =[
    { id: 1, title: "Networking Events", date: "25th july to 5th August 2024", address:"6 sylvester Dabo close, Appollo Cress, South Plateau State", image1:"/lamonde.png"},
    { id: 2, title: "Musical Festival", date: "25th july to 5th August 202425th july to 5th August 2024", address:"6 sylvester Dabo close, Appollo Cress, South Plateau State", image1:"/Crest.png"},
    { id: 3, title: "Business Seminar", date: "25th july to 5th August 202425th july to 5th August 2024", address:"6 sylvester Dabo close, Appollo Cress, South Plateau State", image1:"/kramiusluxury.png"},
    { id: 4, title: "Tech Meet up", date: "25th july to 5th August 2024", address:"6 sylvester Dabo close, Appollo Cress, South Plateau State", image1:"/kramiusluxury.png"},
    { id: 5, title: "Sport Event", date: "25th july to 5th August 2024", address:"6 sylvester Dabo close, Appollo Cress, South Plateau State", image1:"/Crest.png"},
    { id: 6, title: "Cultural Event", date: "25th july to 5th August 2024", address:"6 sylvester Dabo close, Appollo Cress, South Plateau State", image1:"/valada.png"},
    { id: 7, title: "Networking Event", date: "25th july to 5th August 2024", address:"6 sylvester Dabo close, Appollo Cress, South Plateau State", image1:"/lamonde.png"},
    { id: 8, title: "Wedding Event", date: "25th july to 5th August 2024", address:"6 sylvester Dabo close, Appollo Cress, South Plateau State", image1:"/kramiusluxury.png"},
    { id: 9, title: "Business Seminar", date: "25th july to 5th August 2024", address:"6 sylvester Dabo close, Appollo Cress, South Plateau State", image1:"/valada.png"},
    { id: 10, title: "Musical Festival", date: "25th july to 5th August 2024", address:"6 sylvester Dabo close, Appollo Cress, South Plateau State", image1:"/Crest.png"},
    { id: 11, title: "Sport Event", date: "25th july to 5th August 2024", address:"6 sylvester Dabo close, Appollo Cress, South Plateau State", image1:"/lamonde.png"},
    { id: 12, title: "Networking Event", date: "25th july to 5th August 2024", address:"6 sylvester Dabo close, Appollo Cress, South Plateau State", image1:"/thepoint.png"},
     
  
]

const EventDetails = (props) => {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-4">
            <NavLink to='/' className="text-green-600 hover:text-green-700 flex items-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                </svg>
                Back
            </NavLink>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-[3rem]">
            <div className="flex justify-between gap-2 lg:gap-3 ">
                <div>
                    <img src="/valada.png" alt="Hotel Image" className="rounded-[.3rem] shadow-md h-full"/>
                </div>
                <div className="flex flex-col justify-between gap-2 lg:gap-3">
                <img src="/valada.png" alt="Hotel Image" className="rounded-[.3rem] shadow-md h-full "/>
                <img src="/valada.png" alt="Hotel Image" className="rounded-[.3rem] shadow-md h-full"/>
                </div>
            </div>
            <div>
                <h2 className="lg:text-[1.8rem] text-[1rem] font-bold lg:font-semibold lg:mt-4 mb-3 lg:mb-4">{props.name}</h2>
                <div className="mb-4">
                    <h3 className="text-[.8rem] lg:text-lg font-semibold mb-[.7rem] text-green-800">{props.aboutTitle}</h3>
                    <p className="text-[.8rem] lg:text-[1rem]">{props.about}
                    </p>
                </div>
                <div className="mb-4 gap-1 ">
                    <h3 className="text-[.8rem] lg:text-lg font-semibold text-green-800">{props.dateTitle}</h3>
                    <p className="text-[.8rem] lg:text-[1rem]">{props.date}</p>
                </div>
                <div className="mb-4 gap-1">
                    <h3 className="text-[.8rem] lg:text-lg font-semibold text-green-800">{props.timeTitle}</h3>
                    <p className="text-[.8rem] lg:text-[1rem]">{props.time}</p>
                    <p className="text-[.8rem] lg:text-[1rem]">{props.time2}</p>
                    <p className="text-[.8rem] lg:text-[1rem]">{props.time3}</p>
                </div>
                <div className="mb-6 gap-1">
                    <h3 className="text-[.8rem] lg:text-lg font-semibold text-green-800">{props.addressTitle}</h3>
                    <p className="text-[.8rem] lg:text-[1rem]">{props.address}</p>
                </div>
                <a href="https://www.google.com/maps/dir/9.947456,8.8891203/bacardi+jos+google+map/@9.9240768,8.8640693,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x105373732743f7b1:0x3cc2d31d9e47830b!2m2!1d8.8773518!2d9.9002682?entry=ttu"
                    className="bg-green-600 text-white px-2 py-2 lg:px-4 lg:py-2  rounded-lg hover:bg-green-800 text-[.75rem] lg:text-[1rem]">Get
                    Directions</a>
            </div>
        </div>
    </div>
    
    <div className="footer">
      <Footer/>
    </div>
    </>
  )
}

export default EventDetails
