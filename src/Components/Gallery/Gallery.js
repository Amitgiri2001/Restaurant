import React from "react";
import styles from "./Gallery.module.css";
import Banner from "../Banner/Banner"
// import ModalComp from "./Model/Model";

// import images
import img1 from "../../images/img1.jpeg";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpeg";
import img4 from "../../images/img4.jpeg";
import img5 from "../../images/img5.jpg";
import img6 from "../../images/img6.jpeg";
import img7 from "../../images/img7.jpeg";
import img8 from "../../images/slider3 (1).png";
import img9 from "../../images/img11.jpg";
import img10 from "../../images/img10.jpg";
import img11 from "../../images/img9.jpg";
import img12 from "../../images/img12.jpg";
import GalleryTemplate from "./GalleryTemplate";

const Gallery = () => {
  const images = [];
  //push all images into this array
  for (let i = 1; i < 13; i++) {
    images.push(`img${i}.jpg`);
  }

  return (
    <>
      <Banner text="Our Gallery" id="gallery" img={img2} />
      {/* <h1 className={styles.heading
      }>Our Gallery</h1> */}

      <div id="gallery">
        <GalleryTemplate img1={img1} img2={img2} img3={img3} img4={img4} />
        <GalleryTemplate img1={img5} img2={img6} img3={img7} img4={img8} />
        <GalleryTemplate img1={img9} img2={img10} img3={img11} img4={img12} />
      </div>
      {/* <GalleryTemplate img1={img1} img2={img2} img3={img3} img4={img4} /> */}

    </>
  );
};

export default Gallery;
