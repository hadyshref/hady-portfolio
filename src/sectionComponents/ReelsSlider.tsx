import { useRef } from "react";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";

import { EffectCoverflow } from "swiper/modules";

import { reelsData } from "../Data/DynamicData"

export default function ReelsSlider() {
    const videoRefs = useRef([]);

    const handlePlay = (currentIndex) => {
        videoRefs.current.forEach((video, index) => {
            if (video && index !== currentIndex) {
                video.pause();
            }
        });
    };

    // Framer Motion variants for elegant fade/scale animation
    const reelVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1 },
    };

    return (
        <div className="w-full py-12 m-auto">
            <motion.h3
                className="text-center text-5xl text-white mb-12"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                Recent Reels
            </motion.h3>

            <Swiper
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                spaceBetween={20}
                coverflowEffect={{
                    rotate: 30,
                    slideShadows: false,
                }}
                modules={[EffectCoverflow]}
                className="mySwiper m-auto"
                breakpoints={{
                    320: { slidesPerView: 1.5 },
                    640: { slidesPerView: 2 },
                    1280: { slidesPerView: 2.8 },
                }}
            >
                {reelsData.slice(0, 5).map((reel, index) => (
                    <SwiperSlide
                        key={reel.id}
                        className="flex justify-center items-center"
                    >
                        <motion.div
                            className="w-full flex flex-col items-center my-12"
                            variants={reelVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <div className="rounded-xl transition-transform duration-300 hover:shadow-[0_0_30px_#fff]">
                                <video
                                    ref={(el) => (videoRefs.current[index] = el)}
                                    onPlay={() => handlePlay(index)}
                                    src={reel.video}
                                    className="w-72 md:w-80 lg:w-88 h-[420px] md:h-[468px] lg:h-[562px] xl:h-[648px] object-cover rounded-xl"
                                    controls
                                    playsInline
                                />
                                <p className="p-4 text-white text-base md:text-lg lg:text-xl text-center">
                                    {reel.title}
                                </p>
                            </div>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
