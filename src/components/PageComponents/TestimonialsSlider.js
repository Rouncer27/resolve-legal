import React from "react"
import styled from "styled-components"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { B1White, H1Gold, fontSizer } from "../../styles/helpers"

const settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: false,
  draggable: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 15000,
  centerPadding: "0",
  arrows: false,
  dots: true,
}

const TestimonialsSlider = ({ testimonials }) => {
  return (
    <TestimonialsSliderStyled>
      <div className="slider-title">
        <h2>Testimonials</h2>
      </div>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => {
          console.log(testimonial)
          return (
            <TestimonialSlide key={index}>
              <div
                dangerouslySetInnerHTML={{
                  __html: testimonial.node.testimonials.content,
                }}
              />
              <div>
                <p>{testimonial.node.title}</p>
              </div>
            </TestimonialSlide>
          )
        })}
      </Slider>
    </TestimonialsSliderStyled>
  )
}

const TestimonialsSliderStyled = styled.div`
  position: absolute;
  top: 10rem;
  right: 5rem;
  bottom: 10rem;
  width: 75rem;
  padding: 6rem 8rem;
  background-color: rgba(41, 41, 41, 0.9);
  z-index: 1000;

  .slider-title {
    width: 100%;
    text-align: center;

    h2 {
      ${H1Gold};
      margin: 0;
    }
  }

  .slick-slider {
    position: relative;
  }
`

const TestimonialSlide = styled.div`
  padding-top: 3.5rem;

  p {
    ${B1White};
    ${fontSizer(1.4, 1.6, 76.8, 150, 1.8)};
  }
`

export default TestimonialsSlider
