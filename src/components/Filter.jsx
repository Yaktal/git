// src/components/DataFetcher.js
import React, { useState, useEffect } from 'react';

const Filter = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://documenter.getpostman.com/view/36750929/2sA3kSni9m#418e538c-1683-458b-b80b-2bbb271c25ad')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
        <div>
       
        <div>
        <div className="relative bg-cover bg-center min-h-[6rem]">
    <div className="bg-[url(/images/nowij.png)] bg-contain bg-no-repeat w-[100%] min-h-[6rem] lg:bg-cover lg:min-h-[23rem] lg:w-full lg:bg-center">
    </div>
</div>

{/* // <!-- Body --> */}

<div className="container mx-auto px-4 py-12">
    <div className="flex justify-between flex-col lg:flex-row">
        <div className="flex items-center gap-1">
            <h2 className="lg:text-[1.8rem] text-xl font-bold lg:font-semibold">CURRENT EVENTS</h2>
            <img src="/images/arrow.png" className="h-2 w-3 mt-2"/>
        </div>
        
    </div>

    </div>
    </div>
 
{/* BACKEND SIDE */}
    <div className="p-4">
      <div className="flex space-x-4 mb-4">
        {['All', 'Networking', 'Seminars', 'Tech', 'Sports','Wedding','Culture'].map(type => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-4 py-2 rounded-lg ${filter === type ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            {type}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {filteredEvents.map(event => (
          <div key={event.id} className="bg-gray-100 border border-gray-200 rounded-lg overflow-hidden">
            <img src={event.image} alt={event.title} className="w-full min-h-48 object-cover lg:p-4" />
            <div className="p-4">
              <h3 className="text-[1rem] lg:text-xl font-bold text-gray-800 pb-2">{event.title}</h3>
              <p className="text-[.75rem] lg:text-[1rem] text-gray-600 pb-1">{event.address}</p>
              <p className="text-[.75rem] lg:text-[1rem] text-gray-600">{event.date}</p>
              <div className="flex items-center justify-between mt-4">
                <a href="details.html" className="bg-green-200 text-green-600 px-2 py-[.4rem] lg:px-4 lg:py-2 rounded-lg hover:text-green-700 text-[.75rem] lg:text-[1rem]">More Info</a>
                <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.address1)}`} className="bg-green-700 text-white px-2 py-[.4rem] lg:px-4 lg:py-2 rounded-lg text-[.75rem] lg:text-[1rem]">Get Directions</a>
              </div>
            </div>
          </div>
        ))}
        </div>
     
      </div>
    </div>
  </div>
  );
};

export default Filter;
