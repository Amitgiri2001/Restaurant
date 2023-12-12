import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import logo from "../../images/saison_logo.svg";
import bars from "../../images/icons8-menu.svg";
import cross from "../../images/icons8-close.svg"
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };
  const closeNavbar = () => {
    window.innerWidth < 768 && setIsExpanded(!isExpanded);
  }

  // Add an event listener to check the window width on resize
  useEffect(() => {
    const handleResize = () => {
      console.log('resize');
      setIsExpanded(window.innerWidth >= 768); // Adjust the value based on your desired tab size
    };

    // Initial check
    handleResize();

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollDown = () => {
    document.getElementById("menu").scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styles.container}>
      {isExpanded ? (
        <>
          <div className={styles.first}>
            <p><Link to="/" onClick={closeNavbar}>HOME</Link></p>
            <p><Link to="/about" onClick={closeNavbar}>ABOUT US</Link></p>
            <p><Link to="/team" onClick={closeNavbar}>TEAM</Link></p>
          </div>
          <div className={styles.second}>
            <img src={logo} alt="logo" />
          </div>
          <div className={styles.third}>
            <p><Link to="/gallery" onClick={closeNavbar}>GALLERY</Link></p>
            <p><Link to="/contact" onClick={closeNavbar}>CONTACT</Link></p>
            <p><Link to="https://www.exploretock.com/saison/" target="_blank" rel="noopener noreferrer" onClick={closeNavbar}>RESERVATIONS</Link></p>
          </div>
        </>
      ) : (
        <div className={styles.logoOnly}>
          <img src={logo} alt="logo" />
        </div>
      )}

      {window.innerWidth < 768 && (
        <button onClick={toggleNavbar} className={styles.toggleButton}>
          <img src={isExpanded ? cross : bars} alt="expand bars" />

        </button>
      )}
    </div>
  );
};

export default Navbar;
