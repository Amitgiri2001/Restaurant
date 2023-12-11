import React, { useState } from 'react';
import teamData from './TeamData'; // Assuming your data is in a separate file

import styles from './TeamPage.module.css';
import aboutBackground from '../../images/about_back.jpg';
import Banner from '../Banner/Banner';

import ModalComp from "../Gallery/Model/Model";

const TeamPage = () => {
    const [hoveredImage, setHoveredImage] = useState(null);

    const handleImageHover = (image) => {
        setHoveredImage(image);
    };

    const handleImageLeave = () => {
        setHoveredImage(null);
    };

    return (
        <>
            <Banner text="Our Team" id="team" caption=
                "Harmony in every task, synergy in every triumph—our strength lies in the power of teamwork." img={aboutBackground} />
            <div className={styles.teamContainer} id='team'>
                {teamData.map((member, index) => (
                    <div key={index} className={styles.memberContainer}>
                        <div
                            className={styles.imageContainer}
                            onMouseEnter={() => handleImageHover(member.imageSrc)}
                            onMouseLeave={handleImageLeave}
                        >
                            {hoveredImage === member.imageSrc && (
                                <button className={styles.btn}>
                                    <ModalComp image={member.imageSrc} />
                                </button>
                            )}
                            <img src={member.imageSrc} alt={member.name} className={styles.memberImage} />
                        </div>
                        <div className={styles.memberInfo}>
                            <h3 className={styles.memberName}>{member.name}</h3>
                            <p className={styles.memberRole}>{member.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default TeamPage;
