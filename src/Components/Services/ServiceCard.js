import React from 'react';
import styles from "./ServiceCard.module.css"

const ServiceCard = ({ image, text, caption }) => {
    return (
        <div className={styles.col}>
            <div className={styles.service}>
                <div className={styles.img_wrapper}>
                    <img src={image} alt="saison service" className={styles.img_responsive} />
                    <h4>{text}</h4>
                    {caption && <p>{caption}</p>}
                </div>
            </div>
        </div>
    )
}

export default ServiceCard