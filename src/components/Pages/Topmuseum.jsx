import React from 'react'
import Toppage from './Toppage'
import Footer from '../Footer'


const Topmuseum = (  props) => {
  return (
    <>
        <nav className='h-[9rem]'></nav>
      <div className="flex flex-col p-6 mb-4">
        <Toppage
        header="Top 5 Museums & Galleries in Jos"
        subHeader="Enjoy the beautiful sights and prepare to have a great time"
        imageUrl="/Museum MOTNA.jpg"
        openingText="Jos has a lot to offer visitors, from its wildlife parks and natural wonders to its rich cultural heritage and historical sites. Whether you’re interested in hiking, wildlife, or history, there’s something for everyone in Jos. 
        
        Jos is a popular tourist destination for both local and international visitors. With its temperate climate, picturesque landscapes, and rich cultural heritage, there are plenty of places to explore and things to do in Jos.

        Here are 7 best places and things to do in Jos:"
        articleImg="/wildlife.jpeg"
        articleHead="1. Jos Wildlife Park"
        articleBody="Jos Wildlife Park is a must-visit for animal lovers. The park is home to a variety of wildlife species, including lions, zebras, hyenas, and many more. Visitors can take a guided tour of the park and see the animals up close."
      />

      <Toppage
        articleImg="/nt museum.jpeg"
        articleHead="2. National Museum"
        articleBody="The National Museum in Jos is a great place to learn about the history and culture of Nigeria. The museum has a collection of artifacts, including traditional clothing, pottery, and sculptures."
      />

      <Toppage
        articleImg="/10 cmd.jpeg"
        articleHead="3. Ten Commandments"
        articleBody="The National Museum in Jos is a great place to learn about the history and culture of Nigeria. The museum has a collection of artifacts, including traditional clothing, pottery, and sculptures."
      />

      <Toppage
        articleImg="/zoo.jpeg"
        articleHead="4. Zoo"
        articleBody="The National Museum in Jos is a great place to learn about the history and culture of Nigeria. The museum has a collection of artifacts, including traditional clothing, pottery, and sculptures."
      />
        
      <Toppage
        articleImg="/Museum MOTNA.jpg"
        articleHead="5. MOTNA"
        articleBody="The National Museum in Jos is a great place to learn about the history and culture of Nigeria. The museum has a collection of artifacts, including traditional clothing, pottery, and sculptures."
      />
        
      </div>

      <Footer/>
    </>
  )
}

export default Topmuseum
