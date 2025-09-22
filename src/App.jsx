import Nav from "./components/Nav";
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page from "./components/Pages/Page";
import NowIJ from "./components/Pages/NowIJ";
import CurrentEvent from "./components/Pages/SubPages/CurrentEvent";
import UpcomingEvent from "./components/Pages/UpcomingEvent";
import Accomodation from "./components/Pages/Accomodation"
import Attractions from "./components/Pages/Attractions"
import Shopping from "./components/Pages/Shopping"
import Restaurants from "./components/Pages/Restaurants"
import Hospitals from "./components/Pages/Hospitals";
import RestaurantDetails from "./components/Pages/RestaurantDetails";
import EventDetail1 from "./components/Pages/SubPages/Details/EventDetail1";
import EventDetail2 from "./components/Pages/SubPages/Details/EventDetail2";
import EventDetail3 from "./components/Pages/SubPages/Details/EventDetail3";
import InJos from "./components/Pages/InJos";
import Broadway from "./components/Pages/Museum";
import Tour from "./components/Pages/Tour";
import Event from "./components/Pages/Event";
import Shopij from "./components/Pages/Shopij";
import Eat from "./components/Pages/Eat";
import Museum from "./components/Pages/Museum";
import Wheretostay from "./components/Pages/Wheretostay";
import Topmuseum from "./components/Pages/Topmuseum";
import Map from "./components/Pages/Map";
import Booking from "./components/Pages/Booking";
import Bookingdetail from "./components/Pages/Tours";
import Tours from "./components/Pages/Tours";
import BookingSuccess from "./components/Pages/BookingSuccess";

function App() {

  return (
    <>
      
      <BrowserRouter>
        {/* <Header/> */}
        {/* <Footer/> */}
        <Nav/>
        {/* <Page/> */}
        <Routes>
            {/* <Route exact path="/" element={<Home/>}/> */}
            <Route path="/" element={<Page/>} />
            <Route path="/museum" element={<Museum/>} />
            <Route path="/tour" element={<Tour/>} />
            <Route path="/event" element={<Event/>} />
            <Route path="/eat" element={<Eat/>} />
            <Route path="/current-event" element={<CurrentEvent/>} />
            <Route path="/upcoming-event" element={<UpcomingEvent/>} />
            <Route path="/injos" element={<InJos/>} />
            <Route path="/wheretostay" element={<Wheretostay/>} />
            <Route path="/topmuseum" element={<Topmuseum/>} />
            <Route path="/shopping" element={<Shopij/>} />
            <Route path="/restaurants" element={<Restaurants/>} />
            <Route path="/hospitals" element={<Hospitals/>} />
            <Route path="/upcoming-events" element={<UpcomingEvent/>} />
            <Route path="/restaurant-details" element={<RestaurantDetails/>} />
            <Route path="/map" element={<Map/>} />
            <Route path="/booking/:id" element={<Booking/>} />
            <Route path="/tours" element={<Tours/>} />
            <Route path="/bookingsuccess" element={<BookingSuccess/>} />
            
            
        </Routes>
        
      </BrowserRouter>
      
    </>
  )
}

export default App;
