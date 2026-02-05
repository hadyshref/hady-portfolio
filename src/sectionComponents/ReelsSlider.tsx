import { useRef } from "react";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import { EffectCoverflow, Navigation } from "swiper/modules";

import { reelsData } from "../Data/DynamicData";

export default function ReelsSlider() {
    const videoRefs = useRef([]);

    const handlePlay = (currentIndex) => {
        videoRefs.current.forEach((video, index) => {
            if (video && index !== currentIndex) {
                video.pause();
            }
        });
    };

    const reelVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1 },
    };

    return (
        <div className="w-full py-12 m-auto relative">
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
                navigation={{
                    nextEl: ".reels-next",
                    prevEl: ".reels-prev",
                }}
                coverflowEffect={{
                    rotate: 30,
                    slideShadows: false,
                }}
                modules={[EffectCoverflow, Navigation]}
                className="mySwiper m-auto relative"
                breakpoints={{
                    320: { slidesPerView: 2 },
                    640: { slidesPerView: 2 },
                    1280: { slidesPerView: 2.8 },
                }}
            >
                {reelsData.map((reel, index) => (
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
                                    preload="none"

                                />
                                <p className="p-4 text-white text-base md:text-lg lg:text-xl text-center">
                                    {reel.title}
                                </p>
                            </div>
                        </motion.div>
                    </SwiperSlide>
                ))}

                {/* Left Arrow */}
                <button
                    className="reels-prev absolute left-4 top-1/2 -translate-y-1/2 z-10
                    bg-white text-black w-12 h-12 rounded-full
                    flex items-center justify-center
                    hover:bg-black hover:text-white
                    transition-all duration-300 shadow-lg"
                >
                    ❮
                </button>

                {/* Right Arrow */}
                <button
                    className="reels-next absolute right-4 top-1/2 -translate-y-1/2 z-10
                    bg-white text-black w-12 h-12 rounded-full
                    flex items-center justify-center
                    hover:bg-black hover:text-white
                    transition-all duration-300 shadow-lg"
                >
                    ❯
                </button>
            </Swiper>
        </div>
    );
}
