


import {useState} from 'react'
  import { data } from './Data';
//   import Search from "./Search";
  const Header =()=> {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [search, setSearch] = useState('');
    return(
        <>
        <nav className="flex items-center justify-between p-4 bg-white shadow-xl">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <img src="/images/JCITY LOGO 1.png" alt="Logo" className="h-[100px] w-[70px]" />
            </div>
            {/* <!-- Hamburger Menu Button --> */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="focus:outline-none"
              >
                <svg
                  className="w-6 h-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
            {/* <!-- Navigation Links for Desktop --> */}
            <div className="hidden md:flex space-x-12">
              <div className="relative group">
                <a href="#" className="text-black hover:text-green-600">NOW IN JOS</a>
              </div>
              <div className="relative group">
                <a href="#" className="text-black hover:text-green-800">ACCOMMODATION</a>
              </div>
              <div className="relative group">
                <a href="#" className="text-black hover:text-green-600">RESTAURANTS</a>
              </div>
              <div className="relative group">
                <a href="#" className="text-black hover:text-green-600">SHOPPING</a>
              </div>
              <div className="relative group">
                <a href="#" className="text-black hover:text-green-600">ATTRACTIONS</a>
              </div>
            </div>
          </div>
          {/* <!-- Search Bar --> */}
          <form onChange={(e) => setSearch(e.target.value)} >
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-600"
               
              />
             
              </div>
           
          </form>
        </nav>
        {/* <!-- Mobile Menu --> */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-2 p-4">
              <a href="#" className="text-black hover:text-green-600">NOW IN JOS</a>
              <a href="#" className="text-black hover:text-green-800">ACCOMMODATION</a>
              <a href="#" className="text-black hover:text-green-600">RESTAURANTS</a>
              <a href="#" className="text-black hover:text-green-600">SHOPPING</a>
              <a href="#" className="text-black hover:text-green-600">ATTRACTIONS</a>
            </div>
          </div>
        )}   
        <div> {search? 
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* shopping card */}
          {data
              .filter((item)=>{
                return search.toLowerCase() ==='' ? item
                : item.Location.toLowerCase().includes(search);
              })
              .map((item) => (
                
                <div classsName="bg-gray-100 border border-gray-200 rounded-lg overflow-hidden" >
              <img src={item.image} alt="Terminus" className="w-full min-h-48 object-cover lg:p-4"/>
              <div className="p-4" key={item.id}>
                  <h3 className="text-[1rem] lg:text-xl font-bold text-gray-800 pb-2">{item.Location}</h3>
                  <p className="text-[.75rem] lg:text-[1rem] text-gray-600 pb-1">{item.Rate}</p>
                  <p className="text-[.75rem] lg:text-[1rem] text-gray-600">{item.Address}</p>
                  <div className="flex items-center justify-between mt-4">
                      <a href="details.html" className="bg-green-200 text-green-600 b-green-500 px-2 py-[.4rem] lg:px-4 lg:py-2 rounded-lg hover:text-green-700 text-[.75rem] lg:text-[1rem]">More Info</a>
                      <a href="#" className="bg-green-700 text-white px-2 py-[.4rem] lg:px-4 lg:py-2 rounded-lg text-[.75rem] lg:text-[1rem]">Get Directions</a>
                  </div>
              </div>
              
  
          </div>
                
  ))}
          
          
  </div>
  : <div>
    {/* <!-- Hero Section --> */}
    <section className="relative bg-cover bg-center min-h-[6rem]">
        {/* <!-- <div class="absolute inset-0"></div> --> */}
        <div className="bg-[url(/images/Group-2.png)] bg-contain bg-no-repeat w-[100%] min-h-[6rem] lg:bg-cover lg:min-h-[23rem] lg:w-full">
            <img src="/images/JCITY LOGO 1.png" className="flex  w-[3.2rem] h-[3.8rem] lg:w-[8rem] lg:min-h-[12rem] lg:items-center lg:pt-[3rem] mx-auto"/>
        </div>
        <div className="container mx-auto relative z-10 flex justify-center items-center h-full">
            <div className="text-center text-black px-[1rem]">
                <h1 className="lg:text-4xl text-xl font-semibold leading-[auto] pt-[3rem]">DON'T WASTE A MINUTE!</h1>
                <p clasNames="mt-4 lg:text-[1.125rem] text-[.9rem]">Explore <span class="text-green-500">beautiful</span> attractions and enjoy all the <span class="text-green-500">fun</span> activities that Jos City has for you.</p>
            </div>
        </div>
    </section>

    {/* <!-- Attractions Section --> */}
    <section className="py-12  px-[1rem]">
        <div className="container mx-auto">
            <div className="flex lg:flex-row flex-col items-center gap-6 min-h-[20%]">
                    <img src="/images/Frame 43 (1).png" alt="Rayfield Resort" className="rounded-lg shadow-md overflow-hidden w-[100%] h-[100%] object-cover"/>
                    <img src="/images/Frame 46.png " alt="Asop Water Falls" className="rounded-lg shadow-md overflow-hidden w-[100%] h-[100%] object-cover"/>
                    <img src="/images/Frame 45.png" alt="Play Station" className="rounded-lg shadow-md overflow-hidden w-[100%] h-[100%] object-cover"/>
            </div>
            <div className="text-center mt-8">
                <a href="attraction.html" className="inline-block bg-green-600 font-semibold text-[.95rem] text-white py-2 px-10 rounded">See All &rightarrow;</a>
            </div>
            </div>
    </section>

    {/* <!-- Restaurants Section --> */}
    <section className="py-12 bg-gray-50  px-[1rem]">
        <div className="container mx-auto text-center">
            <h2 className="lg:text-4xl text-xl font-bold">SAVOUR JOS</h2>
            <p className="mt-4 lg:text-center text-center">Whether you're looking for neighborhood eateries or cultural flavors, finding a delicious experience in any part of Jos City has been made almost effortless.</p>
        </div>
        <div className="container mx-auto mt-8 flex flex-col">
            <div className="bg-white rounded-lg flex flex-col lg:flex-row shadow-md overflow-hidden h-[23rem] lg:h-[25rem] lg:w-[82%] lg:mx-auto">
                <img src="/images/Frame 43.png" alt="Bacardi Restaurant and Cafe" className=" lg:p-[2rem] p-[1rem]"/>
                <div className="p-4">
                    <h2 className="text-[1rem] lg:text-2xl font-semibold lg:pt-[6rem]">Bacardi Restaurant and Cafe</h2>
                    <p className="pt-[1rem] lg:pt-[1.8rem] text-[.8rem] lg:text-[1rem]">11 Dandaura Road, Off Wase Road, GRA, Jos, Plateau</p>
                    <div className="pt-[1.8rem] lg:pt-[5rem] pb-[1.5rem]">
                        <a href="#" className="cursor-pointer bg-green-600 px-6 py-2 text-white text-[.8rem] lg:text-[1rem] font-semibold rounded-md">View Details</a>
                    </div>
                </div>
            </div>
            <div className="text-center mt-8">
                <a href="attraction.html" className="inline-block bg-green-600 font-semibold text-[.95rem] text-white py-2 px-10 rounded">See All &rightarrow;</a>
            </div>
        </div>
    </section>

    {/* <!-- Events Section --> */}
    <section className="py-12  px-[1rem]">
        <div className="container mx-auto text-center">
            <h2 className="lg:text-4xl text-xl font-bold">EXPLORE UPCOMING EVENTS</h2>
            <p className="mt-4">Stay up to date on current and upcoming events that will spice up your stay.</p>
        </div>
        <div className="container mx-auto mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-4">
                        <img src="/images/Frame 28.png"/>
                        <h2 className="text-[1rem] lg:text-xl font-semibold pt-6">CoLab Jos Intro Meetup</h2>
                        <p className="mt-2 text-[.7rem] lg:text-[1rem]">NASCO MARKETING COMPANY LTD</p>
                        <div className="flex justify-between pt-[1rem]">
                            <p className="mt-2 text-[.7rem] font-semibold lg:text-[1rem]">SAT, 29 JUNE</p>
                            <a href="#" className="inline-block bg-green-600 text-white text-[.6rem] lg:text-[1rem] font-semibold py-2 px-3 rounded">View Details</a>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-4">
                        <img src="/images/Frame 28.png"/>
                        <h2 className="text-[1rem] lg:text-xl font-semibold pt-6">CoLab Jos Intro Meetup</h2>
                        <p className="mt-2 text-[.7rem] lg:text-[1rem]">NASCO MARKETING COMPANY LTD</p>
                        <div className="flex justify-between pt-[1rem]">
                            <p className="mt-2 text-[.7rem] font-semibold lg:text-[1rem]">SAT, 29 JUNE</p>
                            <a href="#" className="inline-block bg-green-600 text-white text-[.6rem] lg:text-[1rem] font-semibold py-2  px-3 rounded">View Details</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mt-8">
                <a href="#" className="inline-block bg-green-600 text-white py-2 px-16 font-semibold text-[.95rem] rounded-md">See All &rightarrow;</a>
            </div>
        </div>
    </section>
    
    </div>
    } </div>
    </>
    )
}
export default Header;