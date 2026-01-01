import React from 'react'
import Slider from 'react-slick'

function ProductSlider() {

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  }

  return (
    <div className="product-slider">
      <Slider {...settings}>
        <div className="slide">
          <h3>Product 1</h3>
        </div>
        <div className="slide">
          <h3>Product 2</h3>
        </div>
        <div className="slide">
          <h3>Product 3</h3>
        </div>
        <div className="slide">
          <h3>Product 4</h3>
        </div>
        <div className="slide">
          <h3>Product 5</h3>
        </div>
      </Slider>
    </div>
  )
}

export default ProductSlider
