import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import Search from './Search';
import { CIcon } from "@coreui/icons-react";
import { cilChevronRight, cilHamburgerMenu, cilX } from "@coreui/icons";

const Nav = ({}) => {
  // const [openDropdown, setOpendropdown] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  
  const [search, setSearch] = useState('');
  
  function hideNav() {
    search(true)
  } 
  // <NowIJ search={search}/>
  // <Page search={search} />
  
  return (
    
    
    <>
    <nav className="main ">
      <nav className='flex justify-between lg:justify-evenly items-center p-5 font-poppins shadow-md'>
          
            
          <div>
              <NavLink to='/'><img src="jlogo.png" alt="Logo" className="h-[5rem] w-[70px] float-left " /></NavLink>
            </div>
        
          <div className="flex items-center space-x-4">
            
            
            {/* <!-- Hamburger Menu Button --> */}
             
            
            <div className="md:hidden flex items-center ">
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative focus:outline-none transition"
              >
                {isMenuOpen===true?<CIcon className="h-7 mr-2 transform transition-transform duration-300 rotate-180" icon={cilX} size=""/>:<CIcon className="h-7 mr-2" icon={cilHamburgerMenu} size=""/>}
                
              </button>
            </div>
            {/* <!-- Navigation Links for Desktop --> */}
            <div className=" hidden md:flex gap-4 font-semibold ">
              <div className="relative-group">
                <NavLink to='/now-in-jos' className="text-black hover:text-gray-700 font-poppins">NOW IN JOS</NavLink>
              </div>
              <div className="relative-group">
              <NavLink to='/accomodation' className="text-black hover:text-gray-700">HOTELS</NavLink>
              </div>
              <div className="relative group">
              <NavLink to='/restaurants' className="text-black hover:text-gray-700">RESTAURANTS</NavLink>
              </div>
              <div className="relative group">
              <NavLink to='/shopping' className="text-black hover:text-gray-700">SHOPPING</NavLink>
              </div>
              <div className="relative group">
              <NavLink to='/attractions' className="text-black hover:text-gray-700">ATTRACTIONS</NavLink>
              </div>
            </div>
          </div>
          {/* <!-- Search Bar --> */}
          <div className='hidden lg:flex '>
            {isMenuOpen===true?null:<Search/>}
          </div>
          
        </nav>
        {/* <!-- Mobile Menu --> */}
        {isMenuOpen===true? (
          <div className="md:hidden flex justify-between p-10 mobileMenu">
            {/* <nav className='h-[8rem]'></nav> */}
            <div className='font-semibold'>
              
            <div className="relative-group">
                <NavLink to='/now-in-jos' className="text-black hover:text-gray-700 flex items-center">NOW IN JOS <CIcon className="h-5 ml-2" icon={cilChevronRight} size=""/></NavLink>
              </div>
              <div className='border border-black'></div>
              <div className="relative-group">
              <NavLink to='/accomodation' className="text-black hover:text-gray-700 flex items-center">WHERE TO STAY <CIcon className="h-5 ml-2 text-danger" icon={cilChevronRight} size=""/></NavLink>
              </div>
              <div className='border border-black'></div>
              <div className="relative-group">
              <NavLink to='/restaurants' className="text-black hover:text-gray-700 flex items-center">EAT & DRINK <CIcon className="h-5 ml-2 text-danger" icon={cilChevronRight} size=""/></NavLink>
              </div>
              <div className='border border-black'></div>
              <div className="relative-group">
              <NavLink to='/shopping' className="text-black hover:text-gray-700 flex items-center">SHOPPING <CIcon className="h-5 ml-2 text-danger" icon={cilChevronRight} size=""/></NavLink>
              </div>
              <div className='border border-black'></div>
              <div className="relative-group ">
              <NavLink to='/attractions' className="text-black hover:text-gray-700 flex items-center">MAPS & GUIDES <CIcon className="h-5 ml-2 text-danger" icon={cilChevronRight} size=""/></NavLink>
              </div>
              <div className='border border-black'></div>
            </div>
            
            <div className=''>
            <Search/>
            </div>
          </div>
        ):null}   
        <div className={`searchQuery overflow-y-auto bg-black bg-opacity-[.5/1] ${search && 'pt-[8rem] p-40'} `}>
        
        </div>
    </nav>
      
    </>
    
  )
}

export default Nav
