import React from 'react'
import Toppage from './Toppage'
import Footer from '../Footer'


const Topmuseum = (  props) => {
  return (
    <>
        <nav className='h-[9rem]'></nav>
      <div className="flex flex-col p-6 mb-4">
        <Toppage
        header="Top 5 Hotels in Jos"
        subHeader="Enjoy the beautiful sights and prepare to have a great time"
        imageUrl="/Crest.png"
        openingText="Jos has a lot to offer visitors, from its wildlife parks and natural wonders to its rich cultural heritage and historical sites. Whether you’re interested in hiking, wildlife, or history, there’s something for everyone in Jos. 
        
        Jos is a popular tourist destination for both local and international visitors. With its temperate climate, picturesque landscapes, and rich cultural heritage, there are plenty of places to explore and things to do in Jos.

        Here are 7 best places and things to do in Jos:"
        articleImg="/crest.jpg"
        articleHead="1. Crest"
        articleBody="Crest Hotel is a must-visit for a peaceful environment. The hotel is home to a variety of things to do, including food, tennis, a pool and many more. Visitors can visit to have a nice time."
        articleLocation="https://maps.app.goo.gl/fvR4r4jQpyGy5f83A"
      />

      <Toppage
        articleImg="/crispan.jpg"
        articleHead="2. Crispan"
        articleBody="Crispan Hotel is a must-visit for a peaceful environment. The hotel is home to a variety of things to do, including food, tennis, a pool and many more. Visitors can visit to have a nice time."
        articleLocation="https://maps.app.goo.gl/mThx2fYCiY5McUUD8"
      />

      <Toppage
        articleImg="/lamonde1.jpg"
        articleHead="3. Lamonde"
        articleBody="Lamonde Hotel is a must-visit for a peaceful environment. The hotel is home to a variety of things to do, including food, tennis, a pool and many more. Visitors can visit to have a nice time."
        articleLocation="https://maps.app.goo.gl/RG67FJpGiPZXQ6uq6"
      />

      <Toppage
        articleImg="/hillstation.jpg"
        articleHead="4. Hill Station"
        articleBody="Hill Station Hotel is a must-visit for a peaceful environment. The hotel is home to a variety of things to do, including food, tennis, a pool and many more. Visitors can visit to have a nice time."
        articleLocation="https://maps.app.goo.gl/j5z8RTe1sSM7mXbYA"
      />
        
      <Toppage
        articleImg="/valada.jpg"
        articleHead="5. Valada"
        articleBody="Valada Hotel is a must-visit for a peaceful environment. The hotel is home to a variety of things to do, including food, tennis, a pool and many more. Visitors can visit to have a nice time."
        articleLocation="https://maps.app.goo.gl/srXdDbasKaxfmPZF8"
      />
        
      </div>

      <Footer/>
    </>
  )
}

export default Topmuseum
