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
        arrows: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: "40px",
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: "40px",
              slidesToShow: 1,
            },
          },
        ],
      });
      

    });
  }, [$])

  return (
    <div className='slickSliderContainer'>
      <div className="slider">
        <div>
          <img
            src="466.png" className='sliderimgall'
          />
        </div>
        <div>
          <img
            src="266.png" className='sliderimgall'
          />
        </div>
        <div>
          <img
             className='sliderimgall'     src="42.png"
          />
        </div>
        <div>
          <img
            className='sliderimgall'      src="37.png"
         />
        </div>
        <div>
          <img
             className='sliderimgall'     src="3.png"
          />
        </div>
        <div>
          <img
             className='sliderimgall'     src="183.png"
          />
        </div>
        <div>
          <img
             className='sliderimgall'     src="690.png"
          />
        </div>
      </div>
    </div>
  )
}

export default Slides;
