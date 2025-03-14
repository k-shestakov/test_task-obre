import React from "react";
import "./Footer.scss";

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <a href="#" className="footer__privacy">
          Privacy
        </a>

        <a className="footer__email" href="mailto:example@gmail.com">
          example@gmail.com
        </a>
      </div>
    </footer>
  );
};
