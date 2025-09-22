// src/components/Pages/BookingSuccess.jsx
import React from "react";
import { useLocation, Link } from "react-router-dom";
import Nav from "../Nav";
import Footer from "../Footer";

export default function BookingSuccess() {
  const location = useLocation();
  const booking = location.state; // we’ll pass booking data with navigate()

  if (!booking) {
    return (
      <div className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1 flex items-center justify-center text-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">No booking found</h2>
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
    <div className="min-h-screen flex flex-col bg-gray-50">
      <nav className="h-[8rem]"></nav>
      <main className="flex-1 flex justify-center items-center p-6 md:p-12">
        <section className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-xl text-center">
          <h1 className="text-3xl font-bold text-teal-600 mb-4">🎉 Booking Confirmed!</h1>
          <p className="text-lg text-gray-700 mb-6">
            Thank you <span className="font-semibold">{booking.name}</span>, your booking is confirmed.
          </p>

          <div className="text-left space-y-2 mb-6">
            <p><strong>Tour:</strong> {booking.tourName}</p>
            <p><strong>Price:</strong> {booking.price}</p>
            <p><strong>Email:</strong> {booking.email}</p>
            <p><strong>Phone:</strong> {booking.phone}</p>
            <p><strong>Date:</strong> {booking.date}</p>
            <p><strong>Payment Method:</strong> {booking.payment}</p>
          </div>

          <Link
            to="/tours"
            className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition"
          >
            Back to Tours
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
