import React from 'react'
import Toppage from './Toppage'
import Footer from '../Footer'


const Topshopping = ( props) => {
  return (
    <>
        <nav className='h-[9rem]'></nav>
      <div className="flex flex-col p-6 mb-4">
        <Toppage
        header="Top 5 Places to Shop in Jos"
        subHeader="Enjoy the beautiful sights and prepare to have a great time"
        imageUrl="/kingsbite.jpg"
        openingText="Jos has a lot to offer visitors, from its wildlife parks and natural wonders to its rich cultural heritage and historical sites. Whether you’re interested in hiking, wildlife, or history, there’s something for everyone in Jos. 
        
        Jos is a popular tourist destination for both local and international visitors. With its temperate climate, picturesque landscapes, and rich cultural heritage, there are plenty of places to explore and things to do in Jos.

        Here are 7 best places and things to do in Jos:"
        articleImg="/kingsbite.jpg"
        articleHead="1. King's Bite"
        articleBody="Dominoes Pizza & Ice Cream is a must-visit for a peaceful environment. The hotel is home to a variety of things to do, including food, tennis, a pool and many more. Visitors can visit to have a nice time."
        articleLocation="https://maps.app.goo.gl/8rfUCcPGVT6n7EYA8"
      />

      <Toppage
        articleImg="/flourish.jpg"
        articleHead="2. Flourish Supermarket"
        articleBody="Crispan Hotel is a must-visit for a peaceful environment. The hotel is home to a variety of things to do, including food, tennis, a pool and many more. Visitors can visit to have a nice time."
        articleLocation="https://maps.app.goo.gl/kykwrihA8PCuTuJB7"
      />

      <Toppage
        articleImg="/sugardaddy.jpg"
        articleHead="3. Sugar Daddy Pastry Shop"
        articleBody="Lamonde Hotel is a must-visit for a peaceful environment. The hotel is home to a variety of things to do, including food, tennis, a pool and many more. Visitors can visit to have a nice time."
        articleLocation="https://maps.app.goo.gl/JECvUDFVTwrFcJ6Z8"
      />

      <Toppage
        articleImg="/Terminus.png"
        articleHead="4. Terminus Market"
        articleBody="Hill Station Hotel is a must-visit for a peaceful environment. The hotel is home to a variety of things to do, including food, tennis, a pool and many more. Visitors can visit to have a nice time."
        articleLocation="https://maps.app.goo.gl/p3wd9nCEvfgAWmMfA"
      />
        
      <Toppage
        articleImg="/fashionanatomy.jpg"
        articleHead="5. Fashion Anatomy"
        articleBody="Valada Hotel is a must-visit for a peaceful environment. The hotel is home to a variety of things to do, including food, tennis, a pool and many more. Visitors can visit to have a nice time."
        articleLocation="https://maps.app.goo.gl/EwryHfALzB6YscJB8"
      />
        
      </div>

      <Footer/>
    </>
  )
}

export default Topshopping
