import React, { useEffect } from 'react'
import $ from "jquery";
import "./Carousel.css"
import "slick-slider";
function Slides() {

  useEffect(() => {
    $(document).ready(function () {
      $(".slider").slick({
        centerMode: true,
        centerPadding: "5px",
        slidesToShow: 5,
        slidesToScroll: 1,
        // dots: true,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 2000,
      });

    });
  }, [$])

  return (
    <div className='slickSliderContainer'>
      <div className="slider">
        <div>
          <img
            src="roadster-2.png" className='sliderimgall'
          />
        </div>
        <div>
          <img
            src="Mercedes-Biome-concept.png" className='sliderimgall'
          />
        </div>
        <div>
          <img
             className='sliderimgall'     src="MERCEDES-BENZ-AMG-GT-2016.png"
          />
        </div>
        <div>
          <img
            className='sliderimgall'      src="MCLAREN-SENNA-2019.png"
         />
        </div>
        <div>
          <img
             className='sliderimgall'     src="bugatti-veyron-grand-sport.png"
          />
        </div>
        <div>
          <img
             className='sliderimgall'     src="Audi-R8-LMS-GT2-2021-1.png"
          />
        </div>
        <div>
          <img
             className='sliderimgall'     src="aston-Martin-Vulcan-2015.png"
          />
        </div>
      </div>
    </div>
  )
}

export default Slides;
