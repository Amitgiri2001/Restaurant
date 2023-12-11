import React from 'react'
import styles from "./Services.module.css";
import service1 from "../../images/slider4.jpg"
import service2 from "../../images/slider2.jpg"
import service3 from "../../images/healthy.jpg"
import service4 from "../../images/wine.jpg"
import service5 from "../../images/diet.jpg"
import service6 from "../../images/setting.jpg"

import ServiceCard from './ServiceCard';
import Testimonial from './Testimonial/Testimonial';


const Services = () => {
    return (
        <section>
            <div className={styles.services} id='menu'>
                <h1>Our Services</h1>
                <div className={styles.row}>

                    <ServiceCard image={service1} text="Fine Dining Experience" />
                    <ServiceCard image={service2} text="Tasting Menu" />
                    <ServiceCard image={service3} text="Open Hearth Cooking" />
                    <ServiceCard image={service4} text="Wine Selection" />
                    <ServiceCard image={service5} text="Accommodating Dietary Restrictions" />
                    <ServiceCard image={service6} text="Distinctive Ambiance and Setting" />



                </div>
                <Testimonial />



            </div>




        </section>
    )
}

export default Services