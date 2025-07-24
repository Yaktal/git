import React from 'react'
import EventDetails from '../../EventDetails'
import Cards from '../../../Cards'

const EventDetail1 = (props) => {
  const images = [
    {
      src: 'image1.jpg',
      alt: 'Image 1',
    },
    {
      src: 'image2.jpg',
      alt: 'Image 2',
    },
    {
      src: 'image3.jpg',
      alt: 'Image 3',
    },
    // Add more images as needed
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    <div>
      <nav className='h-[8rem]'></nav>
      
      <EventDetails
      image='/Frame 46.png'
      name='Networking Event'
      aboutTitle='ABOUT'
      about='Join us for an unforgettable experience at Networking Event, where creativity and excitement come together in a spectacular celebration. Enjoy a lineup of captivating performances, workshops, and vibrant exhibitions.'
      dateTitle='DATE'
      date='25th July to 1st August, 2024'
      timeTitle='TIME'
      time='2PM - 6PM'
      addressTitle='ADDRESS'
      address=' 6 Sylvester Dabo Close, Apollo Crescent, South, Jos, Plateau.'
      />
    </div>
  )
}

export default EventDetail1
