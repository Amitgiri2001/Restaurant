// AboutUs.jsx
import React from 'react';
import styles from './AboutUs.module.css';
import Banner from '../Banner/Banner';
import aboutBackground from '../../images/about_back.jpg';
import img1 from "../../images/img7.jpeg";
import img0 from "../../images/img0.avif";
import img2 from "../../images/setting.jpg"
import ServiceCard from '../Services/ServiceCard';


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
                    <ServiceCard image={img0} text="Saison Winery" caption="Los Gatos,CA" />
                    <ServiceCard image={img1} text="Saison SnokeHouse" caption="San Francisco,CA" />
                    <ServiceCard image={img2} text="Saison Hospitality" caption="San Francisco,CA" />


                </div>
            </section>

            {/* Add more sections as needed */}

        </div>
    );
};

export default AboutUs;
