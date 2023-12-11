// Footer.js

import React from "react";
import styles from "./Footer.module.css";
import fb from "../../images/icons8-facebook.gif";
import ins from "../../images/icons8-instagram.gif";
import ln from "../../images/icons8-linkedin-circled.gif";
import tw from "../../images/icons8-twitter.gif";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.firstChild}>
        <div className={styles.leftCol}>
          <h1>
            SAISON <span>sf</span>
          </h1>
          <p>
            Elevate your culinary journey at Saison, where open hearth cooking
            meets innovation. Experience two Michelin-starred excellence and
            celebrate the artistry of fine dining in the heart of California's
            culinary landscape.
          </p>
        </div>
        <div className={styles.rightCol}>
          <div className={styles.leftList}>
            <ul>
              <li>
                <Link to="about">About us</Link>
              </li>
              <li>
                <Link to="contact">Contact Us</Link>
              </li>
              <li>
                <Link to="gallery">Memories</Link>
              </li>
              <li>
                <Link to="merchandise">Merchandise</Link>
              </li>
            </ul>
          </div>
          <div className={styles.rightList}>
            <ul>
              <li>
                <Link to="">Venue</Link>
              </li>
              <li>
                <Link to="">Events</Link>
              </li>
              <li>
                <Link to="gallery">Galleries</Link>
              </li>
              <li>
                <Link to="team">Team</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.line}></div>

      <div className={styles.contact_section}>
        <p>Contact with us on:</p>
        <div className={styles.social_icons}>
          <Link to="https://www.facebook.com/saisonsf/">
            <img
              src={fb}
              alt="Facebook"
              className={styles.img}
              style={{ fill: "white" }}
            />
          </Link>
          <Link to="http://instagram.com/saisonsf">
            <img
              src={ins}
              alt="Instagram"
              className={styles.img}
              style={{ fill: "white" }}
            />
          </Link>
          <Link to="https://twitter.com/Saison">
            <img
              src={tw}
              alt="Twitter"
              className={styles.img}
              style={{ fill: "white" }}
            />
          </Link>
          <Link to="https://www.linkedin.com/company/saison">
            <img
              src={ln}
              alt="LinkedIn"
              className={styles.img}
              style={{ fill: "white" }}
            />
          </Link>
        </div>
      </div>
      <div className={styles.more_contact}>
        <ul>
          <li>
            <Link
              to="https://www.anglerrestaurants.com/san-francisco"
              target="_blank"
            >
              Angler San Francisco
            </Link>
          </li>
          <li>
            <Link to="https://www.saisoncellar.com/" target="_blank">
              Saison Cellar
            </Link>
          </li>
          <li>
            <Link to="https://www.saisonwinery.com/" target="_blank">
              Saison Winery
            </Link>
          </li>
        </ul>
      </div>

      <br />
    </div>
  );
};

export default Footer;
