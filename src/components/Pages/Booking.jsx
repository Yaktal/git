// src/components/Pages/Booking.jsx
import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Nav from "../Nav";
import Footer from "../Footer";
import ImageSlider from "../ImageSlider";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";

export default function Booking() {
  const { id } = useParams();
  const navigate = useNavigate();

  // ✅ Example tours
  const tours = [
    {
      id: "1",
      name: "Shere Hills Hike",
      price: "₦5000",
      images: ["/Wase-Rock.jpg", "/wildlife.jpeg", "/welcome.jpeg"],
    },
    {
      id: "2",
      name: "Jos Museum Visit",
      price: "₦3000",
      images: ["/veda.jpg", "/zoo.jpeg"],
    },
    {
      id: "3",
      name: "Riyom Rock Day Trip",
      price: "₦8000",
      images: ["/VT.jpeg", "/wildlife.jpeg"],
    },
  ];

  const tour = tours.find((t) => String(t.id) === id);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  if (!tour) {
    return (
      <div className="min-h-screen flex flex-col">
        <Nav />
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

  // ✅ Flutterwave config
  const config = {
    public_key: "FLWPUBK_TEST-4afa963f6c0820b6ae3bea2783ba9559-X", // replace with your real public key
    tx_ref: Date.now(),
    amount: parseInt(tour.price.replace(/[^\d]/g, "")), // strip ₦
    currency: "NGN",
    payment_options: "card, banktransfer, ussd",
    customer: {
      email: formData.email || "test@example.com",
      phonenumber: formData.phone || "08012345678",
      name: formData.name || "Guest User",
    },
    customizations: {
      title: "Jos Tour App Booking",
      description: `Payment for ${tour.name}`,
      logo: "/logo.png", // optional: place logo in public folder
    },
  };

  const fwConfig = {
    ...config,
    text: "Pay & Confirm Booking",
    callback: (response) => {
      if (response.status === "successful") {
        navigate("/booking-success", {
          state: {
            ...formData,
            tourName: tour.name,
            price: tour.price,
            paymentId: response.transaction_id,
          },
        });
      }
      closePaymentModal(); // close modal programmatically
    },
    onClose: () => console.log("Payment closed"),
  };

  // ✅ Only enable payment button when form is complete
  const isFormComplete =
    formData.name && formData.email && formData.phone && formData.date;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <nav className="h-[8rem]"></nav>

      {/* Hero with Image Slider */}
      <div className="relative h-72">
        <ImageSlider images={tour.images || []} />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-white font-extrabold">
            {tour.name}
          </h1>
        </div>
      </div>

      {/* Booking Form */}
      <main className="flex-1 flex justify-center p-6 md:p-12">
        <section className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-2 text-gray-900">
            Book Your Spot
          </h2>
          <p className="text-lg mb-6 text-gray-600">Price: {tour.price}</p>

          <form className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-teal-500 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-teal-500 focus:outline-none"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-teal-500 focus:outline-none"
            />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-teal-500 focus:outline-none"
            />

            {/* Flutterwave Payment Button */}
            <FlutterWaveButton
  {...fwConfig}
  text="Pay & Confirm Booking"
  callback={(response) => {
    console.log(response);
    if (response.status === "successful") {
      navigate("/booking-success", {
        state: {
          ...formData,
          tourName: tour.name,
          price: tour.price,
          paymentId: response.transaction_id,
        },
      });
    }
    closePaymentModal();
  }}
  onClose={() => console.log("Payment closed")}
/>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
}
