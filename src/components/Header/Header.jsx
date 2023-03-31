import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import "@fontsource/bellefair";
import LOGO from "../../assets/images/logo/SOTA.png";
import "./Header.css";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 991 && isVisible === true) {
        setIsVisible(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isVisible]);

  return (
    <>
      <nav className="sota-nav">
        <div className="sota-nav__links">
          <Link to="/about">About</Link>
          <a href="https://www.houzz.com/professionals/window-treatments/sota-window-coverings-pfvwus-pf~1762534943#reviews" target="_blank" rel="noreferrer">Testimonials</a>
          <Link className="sota-logo sota-logo--nav" to="/">
            <img style={{width: "90px"}} src={LOGO} alt="SOTA Window Coverings logo" />
            <span>SOTA WINDOW COVERINGS</span>
          </Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div
          className={
            isVisible
              ? "sota-nav__hamburger sota-nav__hamburger--active"
              : "sota-nav__hamburger"
          }
          onClick={() => setIsVisible(!isVisible)}
        >
          <div></div>
        </div>
      </nav>

      <div
        className={
          isVisible ? "mobile-menu mobile-menu--active" : "mobile-menu"
        }
      >
        <div className="mobile-menu__links d-flex flex-column">
          <Link to="/about">About</Link>
          <a href="https://www.houzz.com/professionals/window-treatments/sota-window-coverings-pfvwus-pf~1762534943#reviews" target="_blank" rel="noreferrer">Testimonials</a>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
