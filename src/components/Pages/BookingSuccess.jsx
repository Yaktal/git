import React from "react";
import { useLocation, Link } from "react-router-dom";
import Nav from "../Nav";
import Footer from "../Footer";

export default function BookingSuccess() {
  const location = useLocation();
  const data = location.state || {};

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Nav />

      <main className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-lg w-full text-center">
          <h1 className="text-3xl font-bold text-green-600 mb-4">
            Booking Successful 🎉
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Thank you, <span className="font-semibold">{data.name}</span>.  
            Your booking for <span className="font-semibold">{data.tourName}</span>  
            has been confirmed.
          </p>

          <div className="text-left space-y-2 mb-6">
            <p><strong>Email:</strong> {data.email}</p>
            <p><strong>Phone:</strong> {data.phone}</p>
            <p><strong>Date:</strong> {data.date}</p>
            <p><strong>Price:</strong> {data.price}</p>
            <p><strong>Payment ID:</strong> {data.paymentId}</p>
          </div>

          <Link
            to="/tours"
            className="bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition"
          >
            Back to Tours
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
