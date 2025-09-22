// src/components/Pages/Tours.jsx
import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav";
import Footer from "../Footer";
import ImageSlider from "../ImageSlider";

export default function Tours() {
  const tours = [
    { id: "1", name: "Shere Hills Hike", price: "₦5,000", image: "/shere.jpeg" },
    { id: "2", name: "Jos Museum Visit", price: "₦3,000", image: "/Museum MOTNA.jpg" },
    { id: "3", name: "Riyom Rock Day Trip", price: "₦8,000", image: "/riyom.jpeg" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <nav className='h-[8rem]'></nav>
      <ImageSlider/>

      <div>
        <h1 className="text-4xl mt-12 font-bold flex justify-center">Tours</h1>
      
      <p className="text-center mt-2 mb-4">Enjoy the beautiful sights and prepare to have a great time</p>
      </div>

      <main className="flex-1 p-6 grid md:grid-cols-3 gap-6">
        {tours.map((tour) => (
          <div key={tour.id} className="border rounded shadow p-4 bg-white">
            <img
              src={tour.image}
              alt={tour.name}
              className="w-full h-40 object-cover rounded"
            />
            <h2 className="text-xl font-bold mt-2">{tour.name}</h2>
            <p className="text-gray-600">{tour.price}</p>
            <Link
              to={`/booking/${tour.id}`}
              className="block bg-black text-white mt-4 py-2 rounded text-center"
            >
              Book Now
            </Link>
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
}
