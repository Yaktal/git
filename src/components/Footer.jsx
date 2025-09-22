import { NavLink } from "react-router-dom";

const Footer =()=>{
    return(
        <footer className="bg-black text-white py-8 px-4 ">
        <div class="container mx-auto flex flex-col lg:flex-row justify-evenly gap-[2rem] items-center min-h-[5rem]">

        <div>
            <img src="/jlogo.png" alt="j-travel logo" className="w-[5rem] h-[5rem] lg:w-[8rem] lg:h-[9rem] rounded-full"/>
        </div>
        <div>
            <h3 className="text-[1rem] lg:text-xl font-medium">J TRAVEL TOUR GUIDE</h3>
            <ul className="mt-4 space-y-2 text-center lg:text-left text-[.8rem] lg:text-[1rem]">
                <li><NavLink to="/now-in-jos" className="hover:underline">Now In Jos</NavLink></li>
                <li><NavLink to="/accomodation" className="hover:underline">Where to Stay</NavLink></li>
                <li><NavLink to="/restaurants" className="hover:underline">Eat and Drink</NavLink></li>
                <li><NavLink to="/shopping" className="hover:underline">Shopping</NavLink></li>
                <li><NavLink to="/attractions" className="hover:underline">Guides and Experiences</NavLink></li>
                <li><NavLink to="/tours" className="hover:underline">Booking</NavLink></li>
            </ul>
        </div>
        <div>
            <ul className="lg:mt-[-3rem] space-y-2 text-[.8rem] lg:text-[1rem]">
                <li><a href="/faqs" className="hover:underline">FAQS</a></li>
                <li><a href="/help" className="hover:underline">Help</a></li>
            </ul>
        </div>
        <div className=" lg:mt-[-7rem] space-y-4">
            <h3 className="text-[1rem] lg:text-xl font-medium">STAY IN TOUCH</h3>
            <div className="flex space-x-4 pb-[1.5rem] justify-center">
                <a href="facebook.com"><img src="/lucide_facebook.png" alt="Facebook" className="h-6"/></a>
                <a href="instagram.com"><img src="/fa-brands_instagram.png" alt="Instagram" className="h-6"/></a>
                <a href="twitter.com"><img src="/mage_x.png" alt="Twitter" className="h-6"/></a>
            </div>
        </div>
    </div>
    <div className="flex justify-center  pt-[1rem] lg:pr-[10rem] text-[.8rem] lg:text-[1rem] lg:mt-10">
        <p>© 2024 J Travel Tour Guide. All rights reserved.</p>
    </div>
</footer>
        
    )
}
export default Footer;