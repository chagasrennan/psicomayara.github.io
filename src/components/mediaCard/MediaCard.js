import React from "react";
import "./MediaCard.scss";

export default function MediaCard({ media, isDark }) {
  return (
    <div className={isDark ? "media-card-dark" : "media-card"}>
      <div className="video-container">
        <iframe
          src={`https://www.youtube.com/embed/${media.videoId}?modestbranding=1`}
          title={media.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <h4 className={isDark ? "media-title dark-mode-text" : "media-title"}>
        {media.title}
      </h4>
    </div>
  );
}