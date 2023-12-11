import React, { useState } from 'react';
import styles from "./GalleryTemplate.module.css";
import ModalComp from './Model/Model';

const GalleryTemplate = (props) => {
    const [hoveredImage, setHoveredImage] = useState(null);

    const handleImageHover = (image) => {
        setHoveredImage(image);
    };

    const handleImageLeave = () => {
        setHoveredImage(null);
    };
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <img
                        class={styles.img}
                        src={props.img1}
                        alt="some"
                        onMouseEnter={() => handleImageHover("image1")}
                        onMouseLeave={handleImageLeave}
                    />
                    {hoveredImage === "image1" && (
                        <button
                            className={styles.btn}
                            onMouseEnter={() => handleImageHover("image1")}
                        >
                            <ModalComp image={props.img1} />
                        </button>
                    )}
                </div>
                <div className={styles.right}>
                    <div className={styles.up}>
                        <img
                            class={styles.img}
                            src={props.img2}
                            alt="some"
                            onMouseEnter={() => handleImageHover("image2")}
                            onMouseLeave={handleImageLeave}
                        />
                        {hoveredImage === "image2" && (
                            <button
                                className={styles.btn}
                                onMouseEnter={() => handleImageHover("image2")}
                            >
                                <ModalComp image={props.img2} />
                            </button>
                        )}
                    </div>
                    <div className={styles.down}>
                        <img
                            class={styles.img}
                            src={props.img3}
                            alt="some"
                            onMouseEnter={() => handleImageHover("image3")}
                            onMouseLeave={handleImageLeave}
                        />
                        {hoveredImage === "image3" && (
                            <button
                                className={styles.btn}
                                onMouseEnter={() => handleImageHover("image3")}
                            >
                                <ModalComp image={props.img3} />
                            </button>
                        )}
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                <img
                    class={styles.img}
                    src={props.img4}
                    alt="some"
                    onMouseEnter={() => handleImageHover("image4")}
                    onMouseLeave={handleImageLeave}
                />
                {hoveredImage === "image4" && (
                    <button
                        className={styles.btn}
                        onMouseEnter={() => handleImageHover("image4")}
                    >
                        <ModalComp image={props.img4} />
                    </button>
                )}
            </div>
        </div>
    )
}

export default GalleryTemplate