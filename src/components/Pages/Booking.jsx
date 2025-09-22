// src/components/Pages/Booking.jsx
import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Nav from "../Nav";
import Footer from "../Footer";
import ImageSlider from "../ImageSlider";

export default function Booking() {
  const { id } = useParams();
  const navigate = useNavigate();

  const tours = [
    { id: "1", name: "Shere Hills Hike", price: "₦5,000", image: "/images/shere.jpg" },
    { id: "2", name: "Jos Museum Visit", price: "₦3,000", image: "/images/museum.jpg" },
    { id: "3", name: "Riyom Rock Day Trip", price: "₦8,000", image: "/images/riyom.jpg" },
  ];

  const tour = tours.find((t) => String(t.id) === id);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    payment: "",
  });

  const handleChange = (e) => {
    setFormData((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!tour) return;

    navigate("/bookingsuccess", {
      state: {
        ...formData,
        tourName: tour.name,
        price: tour.price,
      },
    });
  };

  if (!tour) {
    return (
      <div className="min-h-screen flex flex-col">
        <nav className='h-[8rem]'></nav>
      <ImageSlider/>
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Tour not found</h2>
            <Link to="/tours" className="text-blue-600 underline">
              Back to Tours
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="h-[8rem]"></nav>
      <ImageSlider/>

      {/* Hero */}
      <div className="relative h-64">
        <img
          src={tour.image}
          alt={tour.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-3xl text-white font-bold">{tour.name}</h1>
        </div>
      </div>

      {/* Booking Form */}
      <main className="flex-1 flex items-start justify-center p-8">
        <section className="w-full max-w-2xl bg-white rounded shadow p-6">
          <h2 className="text-2xl font-bold mb-2">Book {tour.name}</h2>
          <p className="text-lg mb-4">Price: {tour.price}</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            />
            <select
              name="payment"
              value={formData.payment}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            >
              <option value="">Select Payment Method</option>
              <option value="card">Card</option>
              <option value="bank">Bank Transfer</option>
              <option value="cash">Cash</option>
            </select>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded"
            >
              Confirm Booking
            </button>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
}
