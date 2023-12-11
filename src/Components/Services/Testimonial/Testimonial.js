import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, Pagination, A11y, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import styles from "./Testimonial.module.css";
import background from "../../../images/cake-2484506_640.jpg";

const testimonials = [
    {
        content: "A Culinary Symphony: Saison's tasting menu is a sensory journey, expertly crafted with each course telling a unique story. A true celebration of flavors and innovation.",
        author: "Julia Martinez"
    },
    {
        content: "Unforgettable Hearth Experience: Saison's open hearth cooking is a revelation. The ambiance, the flavors, and the impeccable service create a dining experience that lingers in memory.",
        author: "Robert Chen"
    },
    {
        content: "Exceptional Wine Pairings: Saison's extensive wine list is a treasure trove for enthusiasts. The sommeliers' expertise in curating the perfect pairings elevates the dining experience to extraordinary heights.",
        author: "Emily Thompson"
    }
];


const Testimonial = () => {
    return (
        <div className={styles.testimonial}>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, A11y, EffectFade]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => { console.log("swiper") }}
                className={styles.swipe}
            >
                <SwiperSlide  >
                    <div className={styles.left}>
                        <h2>Testimonials</h2>
                        <p className={styles.content}>

                            {testimonials[0].content}
                            <span className={styles.author}>--&gt; by {testimonials[0].author}</span>
                        </p>
                    </div>

                </SwiperSlide>

                <SwiperSlide>
                    <div className={styles.left}>
                        <h2>Testimonials</h2>
                        <p className={styles.content}>

                            {testimonials[1].content}
                            <span className={styles.author}>--&gt; by {testimonials[1].author}</span>
                        </p>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.left}>
                        <h2>Testimonials</h2>
                        <p className={styles.content}>

                            {testimonials[2].content}
                            <span className={styles.author}>--&gt; by {testimonials[2].author}</span>
                        </p>
                    </div>

                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Testimonial;
