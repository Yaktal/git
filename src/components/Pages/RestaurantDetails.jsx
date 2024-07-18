import React from 'react'
// import Cards from '../../../Cards'
import EventDetails from './EventDetails'

const RestaurantDetails = (props) => {
  return (
    <div>
      <EventDetails
      image='/Frame 46.png'
      name='Networking Event'
      aboutTitle='ABOUT:'
      about='Join us for an unforgettable experience at Networking Event, where creativity and excitement come together in a spectacular celebration. Enjoy a lineup of captivating performances, workshops, and vibrant exhibitions.'
      dateTitle='DATE:'
      date='25th July to 1st August, 2024'
      timeTitle='TIME:'
      time='2PM - 6PM'
      addressTitle='ADDRESS:'
      address=' 6 Sylvester Dabo Close, Apollo Crescent, South, Jos, Plateau.'
      />
    </div>
  )
}

export default RestaurantDetails