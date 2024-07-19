
import {useState, useEffect, useRef} from 'react'
import {cards} from '../Cards'
// import Nav from '../Nav';
import Footer from '../Footer';
import Dropdown from '../Dropdown';
import Filter from '../Filter';
import { NavLink } from 'react-router-dom';
// import Search from '../Search';

const NowIJ = ({search}) => {
    
    const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownToggle = (dropdown) => {
    setOpenDropdown(prev => prev === dropdown ? null : dropdown);
    
  };
  
  function closeAll() {
    if (openDropdown===true) {
      openDropdown===false
    } else {
      openDropdown('')
    }
    
  }
  
  const optionOne = [
    { value: '1', label: 'Current', path: '/now-in-jos' },
    { value: '2', label: 'Upcoming', path: '/now-in-jos'}
  ];
    
    return(
        // <!-- Hero Section -->
       
<>
{/* <Nav/>  */}
<nav className='h-[8rem]'></nav>
{<div className='nav-page font-poppins'>
  <div className="relative bg-cover bg-center min-h-[6rem]">
    <div className=" bg-contain bg-no-repeat w-[100%] min-h-[6rem] lg:bg-cover lg:min-h-[23rem] lg:w-full lg:bg-center">
        <img src="/Frame 123.png" alt="" />
    </div>
</div>

{/* // <!-- Body --> */}
<div className="container mx-auto px-4 py-12">
    <div className="flex justify-between flex-col lg:flex-row">
        <div className="flex items-center gap-1 text-3xl">
            <Dropdown options={optionOne}
              names='CURRENT EVENTS'
              isOpen={openDropdown === 'dropdown3'}
              onToggle={() => handleDropdownToggle('dropdown3')}
              label='Dropdown 3'
               />
        </div>
        
    </div>
    {/*  */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"></div>

    <div className="filter">
      <Filter/>
    </div>
    
</div>
    <Footer/>
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
                  <NavLink to="/detail2" className="bg-green-200 text-green-600 b-green-500 px-2 py-[.4rem] lg:px-4 lg:py-2 rounded-lg hover:text-green-700 text-[.75rem] lg:text-[1rem]">More Info</NavLink>
                  <a href="#" className="bg-green-700 text-white px-2 py-[.4rem] lg:px-4 lg:py-2 rounded-lg text-[.75rem] lg:text-[1rem]">Get Directions</a>
                </div>
              </div>
            </div>
          ) )}
      </div>
      : <div>





      </div>} </div>
</div>}

    
</>

    )
}
export default NowIJ;