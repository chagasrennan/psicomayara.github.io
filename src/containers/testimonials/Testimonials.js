import React, { useContext } from "react";
import "./Testimonials.scss";
import TestimonialCard from "../../components/testimonialsCard/TestimonialsCard";
import { testimonials } from "../../portfolio";
import Slider from "react-slick";
import StyleContext from "../../contexts/StyleContext";

export default function Testimonials() {
  const { isDark } = useContext(StyleContext);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div id="testimonials">
      <div className="testimonials-header">
        <h1 className={isDark ? "dark-mode-text" : ""}>O que meus pacientes dizem:</h1>
      </div>
      <div className="testimonials-container">
        <Slider {...settings}>
          {testimonials.testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              isDark={isDark}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}
