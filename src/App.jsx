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
            <Route path="/detail1" element={<EventDetail1/>} />
            <Route path="/detail2" element={<EventDetail2/>} />
            <Route path="/detail2" element={<EventDetail3/>} />
            <Route path="/current-event" element={<CurrentEvent/>} />
            <Route path="/upcoming-event" element={<UpcomingEvent/>} />
            <Route path="/now-in-jos" element={<NowIJ/>} />
            <Route path="/accomodation" element={<Accomodation/>} />
            <Route path="/attractions" element={<Attractions/>} />
            <Route path="/shopping" element={<Shopping/>} />
            <Route path="/restaurants" element={<Restaurants/>} />
            <Route path="/hospitals" element={<Hospitals/>} />
            <Route path="/upcoming-events" element={<UpcomingEvent/>} />
            <Route path="/restaurant-details" element={<RestaurantDetails/>} />
            
            
        </Routes>
        
      </BrowserRouter>
      
    </>
  )
}

export default App;
