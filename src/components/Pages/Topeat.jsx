import React from 'react'
import Toppage from './Toppage'
import Footer from '../Footer'


const Topeat = ( props) => {
  return (
    <>
        <nav className='h-[9rem]'></nav>
      <div className="flex flex-col p-6 mb-4">
        <Toppage
        header="Top 5 Eat & Drink in Jos"
        subHeader="Enjoy the beautiful sights and prepare to have a great time"
        imageUrl="/Dominoes.png"
        openingText="Jos has a lot to offer visitors, from its wildlife parks and natural wonders to its rich cultural heritage and historical sites. Whether you’re interested in hiking, wildlife, or history, there’s something for everyone in Jos. 
        
        Jos is a popular tourist destination for both local and international visitors. With its temperate climate, picturesque landscapes, and rich cultural heritage, there are plenty of places to explore and things to do in Jos.

        Here are 7 best places and things to do in Jos:"
        articleImg="/Dominoes.png"
        articleHead="1. Dominoes Pizza & Ice Cream"
        articleBody="Dominoes Pizza & Ice Cream is a must-visit for a peaceful environment. The hotel is home to a variety of things to do, including food, tennis, a pool and many more. Visitors can visit to have a nice time."
        articleLocation="https://maps.app.goo.gl/kBKAzYcqA1BMivK19"
      />

      <Toppage
        articleImg="/yakas.jpg"
        articleHead="2. Yakas Cafe"
        articleBody="Crispan Hotel is a must-visit for a peaceful environment. The hotel is home to a variety of things to do, including food, tennis, a pool and many more. Visitors can visit to have a nice time."
        articleLocation="https://maps.app.goo.gl/8eBb4r8Kvh2X2cbo7"
      />

      <Toppage
        articleImg="/kwila.jpg"
        articleHead="3. Kwila's Cuisine"
        articleBody="Lamonde Hotel is a must-visit for a peaceful environment. The hotel is home to a variety of things to do, including food, tennis, a pool and many more. Visitors can visit to have a nice time."
        articleLocation="https://maps.app.goo.gl/xVzvTVjrJzgRC2PX6"
      />

      <Toppage
        articleImg="/karisa.jpg"
        articleHead="4. Karisa Ristorante"
        articleBody="Hill Station Hotel is a must-visit for a peaceful environment. The hotel is home to a variety of things to do, including food, tennis, a pool and many more. Visitors can visit to have a nice time."
        articleLocation="https://maps.app.goo.gl/oa8ZaeLyJ1N2BUY97"
      />
        
      <Toppage
        articleImg="/sipcity.jpg"
        articleHead="5. Sip City"
        articleBody="Valada Hotel is a must-visit for a peaceful environment. The hotel is home to a variety of things to do, including food, tennis, a pool and many more. Visitors can visit to have a nice time."
        articleLocation="https://maps.app.goo.gl/a5x54qnQ868M5pYm6"
      />
        
      </div>

      <Footer/>
    </>
  )
}

export default Topeat
