import React, { useContext } from "react";
import "./MediaSlider.scss";
import MediaCard from "../../components/mediaCard/MediaCard";
import { media } from "../../portfolio";
import Slider from "react-slick";
import StyleContext  from "../../contexts/StyleContext";

export default function MediaSlider() {
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
    <section id="media">
      <div className="media-container">
        <h2 className={isDark ? "section-title dark-mode-text" : "section-title"}>
          Conheça um pouco mais sobre a terapia
        </h2>
        <div className="slider-wrapper">
          <Slider {...settings}>
            {media.items.map((item, index) => (
              <MediaCard
                key={index}
                media={item}
                isDark={isDark}
              />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}