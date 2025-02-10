import React from "react";
import "./TestimonialsCard.scss";

export default function TestimonialCard({ testimonial, isDark }) {
  return (
    <div className={isDark ? "testimonial-card-dark" : "testimonial-card"}>
      <div className="testimonial-content">
        <p className={isDark ? "testimonial-text dark-mode-text" : "testimonial-text"}>
          "{testimonial.text}"
        </p>
        <div className="testimonial-author">
          <img 
            src={testimonial.image} 
            alt={testimonial.name} 
            className="testimonial-image"
          />
          <span className={isDark ? "author-name dark-mode-text" : "author-name"}>
            {testimonial.name}
          </span>
        </div>
      </div>
    </div>
  );
}