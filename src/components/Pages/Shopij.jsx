import React, { useState, useEffect, useRef } from "react";
import ImageSlider from '../ImageSlider'
import Cards from '../Cards'
import { NavLink } from 'react-router-dom'
import Footer from '../Footer'
import Nav from '../Nav'
import Search from '../Search'
import ImgTransform from '../ImgTransform'
import Filter from '../Filter'
import { CIcon } from "@coreui/icons-react";
import { cilArrowRight, cilBasketball, cilBriefcase, cilCalendar, cilDrinkAlcohol, cilFlagAlt, cilHistory, cilHouse, cilList, cilStar, cilStarHalf } from "@coreui/icons";

const insertSearch = ({search}) => {
    
}


const Shopij = ({search}) => {
    
  return (
    <div className={`app font-poppins ${search ? 'no-scroll' : ''}`}>
        <nav className='h-[8rem]'></nav>
        {<div>
            <div className="lg:text-xl">
      <ImageSlider />
      <div className="">
        
        
        {/* <!-- Attractions Section --> */}
    
    
    <div className="justify-center flex-col flex">
      
      <h1 className="text-4xl mt-10 font-bold flex justify-center">Shopping</h1>
      
      <p className="text-center mt-2">Enjoy the beautiful sights and prepare to have a great time</p>
      
      <div className="flex  justify-center flex-col ">
        <img className="min-w-[30rem] p-[4rem]" src="Dominoes.png" alt="" />
        
        <div className="flex justify-center">
          <div className="px-24 flex flex-col justify-center">
            <p className="border border-black w-[4rem] text-center bg-black text-white rounded mb-3">Page</p>
            <h1 className="font-bold text-3xl">Top 5 Places to Shop in Jos</h1>
          <p className="">We've Curated a list of the top 5 places to Shop in Jos. Feel free to Explore.</p>
          <div className="mb-8 mt-3">
                <NavLink to='/details' className="flex items-center font-semibold hover:text-gray-700">LEARN MORE <CIcon className="h-7 ml-2" icon={cilArrowRight} size=""/></NavLink>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    
    <div className="App flex lg:justify-center space-x-4 p-4 lg:h-[40rem] items-center">
      <div className="img ">
        <ImgTransform
        imageUrl="/Frame 46.png"
        altText="Second Image"
        hoverText="Asop Water Falls"
      />
      </div>
      <div className="img w-[26rem]">
      <ImgTransform
        imageUrl="/Frame 43 (1).png"
        altText="First Image"
        hoverText="Rayfield Resort"
      />
      </div>
      <div className="img">
        <ImgTransform
        imageUrl="/Frame 45.png"
        altText="Third Image"
        hoverText="Play Station"
      />
      </div>
      
      
      
    </div>    
        
        {/* Restaurant Section */}
      <section class="py-10 bg-gray-50  px-[1rem]">
        <div class="container mx-auto text-center">
            <h2 class="lg:text-4xl text-xl font-bold">SAVOUR JOS</h2>
            <p class="mt-4 lg:text-center text-center">Whether you're looking for neighborhood eateries or cultural flavors, finding a delicious experience in any part of Jos City has been made almost effortless.</p>
        </div>
        <div class="container mx-auto mt-8 flex flex-col">
            <div class="bg-white rounded-lg flex flex-col lg:flex-row shadow-md overflow-hidden h-[36rem] lg:h-[25rem] lg:w-[82%] lg:mx-auto">
                <img src="Frame 43.png" alt="Bacardi Restaurant and Cafe" class=" lg:p-[2rem] p-[1rem]" />
                <Cards name='Bacardi Restaurant and Cafe' title='11 Dandaura Road, Off Wase Road, GRA, Jos, Plateau'/>
            </div>
            <div className="text-center mt-8">
                <NavLink to='/Restaurants' className="inline-block bg-black hover:scale-110 transform-gpu font-semibold text-[.95rem] text-white py-2 px-10 rounded border">See All</NavLink>
            </div>
        </div>
      </section>
      
      {/* <!-- Events Section --> */}
    <section className="py-12  px-[1rem]">
        <div className="container mx-auto text-center">
            <h2 className="lg:text-4xl text-xl font-bold">EXPLORE UPCOMING EVENTS</h2>
            <p className="mt-4 lg:text-xl">Stay up to date on current and upcoming events that will spice up your stay.</p>
        </div>
        <div className="container mx-auto mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-4">
                        <img src="exploreImg.png"/>
                        <h2 className="text-[1rem] lg:text-xl font-semibold pt-6">CoLab Jos Intro Meetup</h2>
                        <p className="mt-2 text-[.7rem] lg:text-[1rem]">NASCO MARKETING COMPANY LTD</p>
                        <div className="flex justify-between pt-[1rem]">
                            <p className="mt-2 text-[.7rem] font-semibold lg:text-[1rem]">SAT, 29 JUNE</p>
                            <NavLink to='/detail3' className="inline-block bg-black text-white text-[.6rem] lg:text-[1rem] font-semibold py-2  px-3 rounded hover:bg-white hover:text-black hover:border border">View Details</NavLink>
                        </div>
                    </div>
                </div>
                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                    <div class="p-4">
                        <img src="exploreImg.png"/>
                        <h2 class="text-[1rem] lg:text-xl font-semibold pt-6">CoLab Jos Intro Meetup</h2>
                        <p class="mt-2 text-[.7rem] lg:text-[1rem]">NASCO MARKETING COMPANY LTD</p>
                        <div className="flex justify-between pt-[1rem]">
                            <p className="mt-2 text-[.7rem] font-semibold lg:text-[1rem]">SAT, 29 JUNE</p>
                            <NavLink to='/detail3' className="inline-block bg-black text-white text-[.6rem] lg:text-[1rem] font-semibold py-2  px-3 rounded hover:bg-white hover:text-black hover:border border">View Details</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mt-8">
                <NavLink to='/now-in-jos' className="inline-block bg-black text-white py-2 px-16 font-semibold text-[.95rem] rounded-md hover:scale-110 transform-gpu border ">See All</NavLink>
            </div>
            </div>
        
    </section>
    
    <div className="border bg-green-300 p-8 lg:text-xl">
      <h1 className="text-4xl font-bold mb-4">NEWSLETTER</h1>
      
      <p className="font-semibold mb-3">What's good in J City? From coverage of the latest attractions, Broadway shows, incredible cuisines and more. Our emails will make sure you never miss a thing.</p>
      
      <p className="font-semibold mb-1">*Email</p>
      <input className="border-black border-2 w-[36rem] lg:w-[100%] p-2" type="email" name="newsemail" id="" />
      <p className="font-semibold mt-2">*Required Field</p>
      
      <div className="mt-[1rem]">
                <NavLink to='/details' className="inline-block bg-black-600 font-semibold text-[.95rem] py-2 px-10 rounded mb-10 hover:scale-110 transform-gpu border bg-black text-white">SIGN UP</NavLink>
            </div>
    </div>
    
    <div className="mt-5">
      <img className="h-[20rem] w-[100%]" src="YT.jpeg" alt="" />
      
      <div className="p-10">
        <h1 className="font-bold text-4xl mb-5">THINGS TO DO</h1>
        
        <p className="font-semibold">No matter what you're into, you'll find the best of it in J City. See upcoming events and other Citywide highlights below.</p>
        
        <div className="mb-14 mt-2">
          <NavLink to='/details' className="flex items-center font-bold text-xl transform-gpu hover:text-gray-700">BROWSE ALL THINGS TO DO <CIcon className="h-7 ml-2" icon={cilArrowRight} size=""/></NavLink>
        </div>
        
        <div className="flex lg:flex-row flex-wrap justify-center flex-col font-semibold text-2xl space-y-4">
                  <NavLink to="/museum" className="pr-5 flex items-center hover:text-gray-700"><CIcon className="h-7 mr-2" icon={cilStar} size=""/>Museums & Galleries <CIcon className="h-7 ml-2" icon={cilArrowRight} size=""/></NavLink>
                  <NavLink to="/tour" className="pr-5 flex items-center hover:text-gray-700"><CIcon className="h-7 mr-2" icon={cilFlagAlt} size=""/>Tours & Attraction <CIcon className="h-7 ml-2 hover:text-gray-700" icon={cilArrowRight} size=""/></NavLink>
                  <NavLink to="/event" className="pr-5 flex items-center hover:text-gray-700"><CIcon className="h-7 mr-2" icon={cilCalendar} size=""/>Events & Festivals <CIcon className="h-7 ml-2" icon={cilArrowRight} size=""/></NavLink>
                  <NavLink to="/shopping" className="pr-5 flex items-center hover:text-gray-700"><CIcon className="h-7 mr-2" icon={cilBriefcase} size=""/>Shopping <CIcon className="h-7 ml-2" icon={cilArrowRight} size=""/></NavLink>
                  <NavLink to="/eat" className="pr-5 flex items-center hover:text-gray-700"><CIcon className="h-7 mr-2" icon={cilDrinkAlcohol} size=""/>Eat & Drink<CIcon className="h-7 ml-2" icon={cilArrowRight} size=""/></NavLink>
                  <NavLink to="/injos" className="pr-5 flex items-center hover:text-gray-700"><CIcon className="h-7 mr-2" icon={cilHistory} size=""/>Founded By J City <CIcon className="h-7 ml-2" icon={cilArrowRight} size=""/></NavLink>
                </div>
      </div>
    </div>
    
    <div className="flex  justify-center flex-col ">
        <img className="min-w-[30rem] p-[4rem]" src="Dominoes.png" alt="" />
        
        <div className="flex justify-center">
          <div className="px-24 flex flex-col justify-center">
            <p className="border border-black w-[4rem] text-center bg-black text-white rounded mb-3">Page</p>
            <h1 className="font-bold text-3xl">Events & Festivals</h1>
          <p className="pt-2">Learn about the city's past and how to experience milestones in it's history today.</p>
          <div className="mb-8 mt-3">
                <NavLink to='/details' className="flex items-center font-bold hover:text-gray-700">LEARN MORE <CIcon className="h-7 ml-2" icon={cilArrowRight} size=""/></NavLink>
            </div>
          </div>
          
        </div>
      </div>
      
      <div className="App flex lg:justify-center space-x-4 p-4 lg:h-[40rem] items-center">
      <div className="img ">
        <ImgTransform
        imageUrl="/Frame 46.png"
        altText="Second Image"
        hoverText="Asop Water Falls"
      />
      </div>
      <div className="img w-[26rem]">
      <ImgTransform
        imageUrl="/Frame 43 (1).png"
        altText="First Image"
        hoverText="Rayfield Resort"
      />
      </div>
      <div className="img">
        <ImgTransform
        imageUrl="/Frame 45.png"
        altText="Third Image"
        hoverText="Play Station"
      />
      </div>
    </div>
    
    <div className="flex justify-center flex-col mt-8">
        <img className="min-w-[30rem] mb-[3rem]" src="Dominoes.png" alt="https://www.openstreetmap.org/?#map=11/9.9168/8.8121" />
        
        <div className="flex justify-center">
          <div className="px-24 flex flex-col justify-center">
            <p className="border border-black w-[4rem] text-center bg-black text-white rounded mb-3">Page</p>
            <h1 className="font-bold text-3xl">Eat & Drink</h1>
          <p className="pt-2">J City is one of Nigeria's most diverse destinations. Explore the City's many cultural enclaves and see the many landmarks from every angle.</p>
          <div className="mb-8 mt-3">
            <NavLink to='/details' className="flex items-center font-bold hover:text-gray-700">BROWSE ALL MAPS & GUIDES <CIcon className="h-7 ml-2" icon={cilArrowRight} size=""/></NavLink>
          </div>
          </div>
        </div>
      </div>
      
      <div className=" bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-4">NEWSLETTER</h1>
      
      <p className="font-semibold mb-3">What's good in J City? From coverage of the latest attractions, Broadway shows, incredible cuisines and more. Our emails will make sure you never miss a thing.</p>
      
      <p className="font-semibold mb-1">*Email</p>
      <input className="border-black border-2 w-[36rem] lg:w-[100%] p-2" type="email" name="newsemail" id="" />
      <p className="font-semibold mt-2">*Required Field</p>
      
      <div className="mt-[1rem]">
        <NavLink to='/details' className="inline-block bg-black-600 font-semibold text-[.95rem] py-2 px-10 rounded mb-10 hover:scale-110 transform-gpu border bg-black text-white">SIGN UP</NavLink>
      </div>
    </div>
    
    <Footer/>
      </div>
        </div>
        
        <div> {search ?
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {/* shopping card */}
        {data
          .filter( ( item ) => {
            return search.toLowerCase() === '' ? item
              : item.Location.toLowerCase().includes( search );
          } )
          .map( ( item ) => (

            <div classsName="bg-gray-100 border border-gray-200 rounded-lg overflow-hidden">
              <img src={item.image} alt="Terminus" className="w-full min-h-48 object-cover lg:p-4" />
              <div className="p-4" key={item.id}>
                <h3 className="text-[1rem] lg:text-xl font-bold text-gray-800 pb-2">{item.Location}</h3>
                <p className="text-[.75rem] lg:text-[1rem] text-gray-600 pb-1">{item.Rate}</p>
                <p className="text-[.75rem] lg:text-[1rem] text-gray-600">{item.Address}</p>
                <div className="flex items-center justify-between mt-4">
                  <a href="details.html" className="bg-green-200 text-white b-green-500 px-2 py-[.4rem] lg:px-4 lg:py-2 rounded-lg hover:bg-white hover:text-black text-[.75rem] lg:text-[1rem]">More Info</a>
                  <a href="#" className="bg-black text-white px-2 py-[.4rem] lg:px-4 lg:py-2 rounded-lg text-[.75rem] lg:text-[1rem]">Get Directions</a>
                </div>
              </div>
            </div>
          ) )}
      </div>
      : <div>





      </div>} </div>
        </div>}
        
      
    </div>
  )
}

export default Shopij
