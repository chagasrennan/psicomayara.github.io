import React, { useContext } from "react";
import "./Faq.scss";
import FaqItem from "../../components/faqItem/FaqItem";
import { faq } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Faq() {
  const { isDark } = useContext(StyleContext);

  if (!faq.display || !faq.faqs) return null;

  return (
    <section id="faq">
      <div className="faq-container">
        <h2 className={isDark ? "section-title dark-mode-text" : "section-title"}>
        Dúvidas Frequentes
        </h2>
        <div className="faq-items">
          {faq.faqs.map((item, index) => (
            <FaqItem 
              key={index}
              faq={item}
              isDark={isDark}
            />
          ))}
        </div>
      </div>
    </section>
  );
}