import React from "react";
import "./LargeButton.scss";

export default function LargeButton({text, className, href, newTab}) {
  return (
    <div className={className}>
      <a className="large-main-button" href={href} target={newTab && "_blank"}>
        {text}
      </a>
    </div>
  );
} 