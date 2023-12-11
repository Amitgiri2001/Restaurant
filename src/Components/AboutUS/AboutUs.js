// AboutUs.jsx
import React from 'react';
import styles from './AboutUs.module.css';
import Banner from '../Banner/Banner';
import aboutBackground from '../../images/about_back.jpg';
import img1 from "../../images/img7.jpeg";
import img0 from "../../images/img0.avif";
import img2 from "../../images/setting.jpg"


const AboutUs = () => {



    return (
        <div className={styles.container}>
            <Banner text="Welcome to Saison" id="about" caption="Experience culinary excellence in the heart of California." img={aboutBackground} />

            <section className={styles.story} id='about'>
                <h2>Our Story</h2>
                <p>
                    Saison, founded in 2009 as a pop-up, has evolved into a culinary landmark. With a focus on open hearth cooking and a celebration of California's terroir, our journey has been one of passion and innovation.
                </p>
            </section>

            <section className={styles.menu}>
                <h2>Signature Menu</h2>
                <p>
                    Indulge in a curated dining experience featuring a blend of hearth-cooked proteins, seasonal vegetables, and artful desserts. Our menu reflects the essence of fine dining with a touch of creativity.
                </p>
            </section>

            <section className={styles.gallery}>
                <h2>Discover Our Atmosphere</h2>
                <div className={styles.imageContainer}>
                    <div className={styles.col}>
                        <img src={img0} alt="saison" />
                        <h4>Saison Winery</h4>
                        <p>Los Gatos,CA</p>
                    </div>
                    <div className={styles.col}>
                        <img src={img1} alt="saison" />
                        <h4>Saison SnokeHouse</h4>
                        <p>San Francisco,CA</p>
                    </div>
                    <div className={styles.col}>
                        <img src={img2} alt="saison" />
                        <h4>Saison Hospitality</h4>
                        <p>San Francisco,CA</p>
                    </div>

                </div>
            </section>

            {/* Add more sections as needed */}

        </div>
    );
};

export default AboutUs;
