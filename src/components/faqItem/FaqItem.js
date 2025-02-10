import React, { useState } from "react";
import "./FaqItem.scss";

export default function FaqItem({ faq, isDark }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-item ${isDark ? "dark" : ""}`}>
      <div 
        className="faq-header" 
        onClick={() => setIsOpen(!isOpen)}
        role="button"
        aria-expanded={isOpen}
      >
        <h3 className={isDark ? "dark-mode-text" : ""}>{faq.question}</h3>
        <span className={`toggle-icon ${isOpen ? "open" : ""}`}>
          {isOpen ? "−" : "+"}
        </span>
      </div>
      <div className={`faq-content ${isOpen ? "open" : ""}`}>
        <p className={isDark ? "dark-mode-text" : ""}>{faq.answer}</p>
      </div>
    </div>
  );
}