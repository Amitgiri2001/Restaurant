import React from 'react';
import styles from './Contact.module.css';
import contact from "../../images/contact.svg";
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import background from "../../images/contact_back.jpg"
import ContactUsForm from './ContactForm';

const Contact = () => {
    const scrollDown = () => {
        document.getElementById("contactUs").scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <Banner text="Contact Us" id="contactInfo" img={background} />

            <div className={styles.contactUsContainer} id='contactInfo'>
                <div className={styles.imageContainer}>
                    <img src={contact} alt="Contact Us" />
                </div>
                <div className={styles.infoContainer}>
                    <h2>General Inquiries</h2>
                    <p>
                        <Link onClick={scrollDown}>Click here</Link> to send us a message. We’ll be in touch within 24 hours.
                    </p>

                    <h2>Work With Us</h2>
                    <p>
                        We’re perpetually on the lookout for motivated, hard-working people
                        of all stripes to join our team. Apply by sending an email to {'  '}
                        <Link to="mailto:careers@saisonsf.com">careers@saisonsf.com</Link>.
                    </p>

                    <h2>Event Inquiries</h2>
                    <p>
                        Saison is able to host a wide range of private events. Send us your
                        details{' '}
                        <a href="/event-inquiries">here</a>.
                    </p>

                    <h2>Press</h2>
                    <p>
                        Please e-mail <a href="mailto:press@saisonhospitality.com">press@saisonhospitality.com</a>.
                    </p>
                </div>
            </div>
            <ContactUsForm />
        </>
    );
};

export default Contact;
