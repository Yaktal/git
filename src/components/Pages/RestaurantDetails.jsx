import React from 'react'
// import Cards from '../../../Cards'
import EventDetails from './EventDetails'

const RestaurantDetails = (props) => {
  return (
    <div>
      <EventDetails
      image='/Frame 115.png'
      name='BACARDI'
      aboutTitle='ABOUT'
      about='Join us for an unforgettable experience at Bacardi, where creativity and excitement come together in a spectacular celebration. Enjoy a lineup of captivating performances, workshops, and vibrant exhibitions.'
      timeTitle='HOURS'
      time='Tuesday - Saturday     10am - 10pm'
      time2='Sunday                 11am - 10pm'
      time3='Monday                 3pm - 10pm'
      addressTitle='ADDRESS'
      address=' 6 Sylvester Dabo Close, Apollo Crescent, South, Jos, Plateau.'
      />
    </div>
  )
}

export default RestaurantDetails