import React, { useState } from 'react';
import styles from './ContactUsForm.module.css';

const ContactUsForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted:', formData);
    };

    return (
        <><h2 className={styles.head}>Send A Message</h2>
            <div className={styles.contactFormContainer} id='contactUs'>

                <form className={styles.contactForm} onSubmit={handleSubmit}>
                    <label className={styles.formLabel}>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <label className={styles.formLabel}>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <label className={styles.formLabel}>
                        Subject:
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <label className={styles.formLabel}>
                        Message:
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </label>

                    <button type="submit" className={styles.submitButton}>
                        Submit
                    </button>
                </form>
            </div></>
    );
};

export default ContactUsForm;
