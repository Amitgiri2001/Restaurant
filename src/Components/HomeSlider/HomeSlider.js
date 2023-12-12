import React, { useState } from 'react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';


import styles from "./HomeSlider.module.css";


import AnimatedLeftSidebar from './AnimatedLeftSidebar';

function HomeSlider() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.activeIndex);
    };
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={handleSlideChange}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
        >
            <SwiperSlide className={`${styles.slide1} slide`}>
                <AnimatedLeftSidebar heading="WELCOME TO THE SAISON RESTAURANT" onSlideChange={handleSlideChange} />
            </SwiperSlide>

            <SwiperSlide className={styles.slide2}>
                <AnimatedLeftSidebar heading="BEST DINE-IN EXPERIENCE" onSlideChange={handleSlideChange} />
            </SwiperSlide>
            <SwiperSlide className={styles.slide3}><AnimatedLeftSidebar heading="From Pop-Up Origins to Michelin Stars: Saison, Where Every Bite Tells a Story" onSlideChange={handleSlideChange} /></SwiperSlide>
            <SwiperSlide className={styles.slide4}><AnimatedLeftSidebar heading="Saison: Redefining Fine Dining with Every Nuanced Flavor" onSlideChange={handleSlideChange} /></SwiperSlide>


        </Swiper>
    );
};

export default HomeSlider;