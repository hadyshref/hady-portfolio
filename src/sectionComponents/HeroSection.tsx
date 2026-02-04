import Beams from "../components/Beams.jsx";
import { motion } from "framer-motion";
import type { Variants, Transition } from "framer-motion";

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.42, 0, 0.58, 1], // ✅ TS-compatible
    } as Transition,
  },
};

function HeroSection() {
  return (
    <section className="relative flex flex-col justify-center items-center h-[100vh] text-center">
      <div
        style={{
          width: "100%",
          height: "100vh",
          position: "absolute",
          inset: "0",
          zIndex: -100,
        }}
      >
        <Beams
          beamWidth={3}
          beamHeight={30}
          beamNumber={20}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={30}
        />
      </div>

      {/* Foreground Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="p-relative z-100 flex flex-col justify-center items-center gap-10"
      >
        <motion.img
          variants={item}
          src="/assets/profile.jpg"
          className="w-[300px] md:w-[380px] rounded-full border-solid border-2 border-white shadow-[0_0_25px_rgba(255,255,255,0.35),0_0_60px_rgba(255,255,255,0.2)]"
          alt=""
        />

        <motion.p variants={item} className="text-4xl">
          Hi, I’m Hady Sherif
        </motion.p>

        <motion.p variants={item} className="text-5xl font-bold">
          Filmmaker & VideoEditor
        </motion.p>

        <motion.p variants={item} className="text-2xl">
          I help brands and companies turn ideas into cinematic videos
        </motion.p>

        <motion.div variants={item} className="flex flex-col sm:flex-row items-center gap-4">
          {/* Primary Button */}
          <a
            href="#work"
            className="
              relative inline-flex items-center justify-center
              rounded-full px-6 py-3 text-sm font-medium
              bg-white text-black
              shadow-[0_0_25px_rgba(255,255,255,0.25)]
              transition-all duration-300 ease-out
              hover:bg-neutral-200 hover:shadow-[0_0_35px_rgba(255,255,255,0.45)]
              hover:-translate-y-0.5
            "
          >
            Watch My Work
          </a>

          {/* Secondary Button */}
          <a
            href="#contact-me"
            className="
              relative inline-flex items-center justify-center
              rounded-full px-6 py-3 text-sm font-medium
              border border-white/20 bg-white/5 text-white backdrop-blur-sm
              transition-all duration-300 ease-out
              hover:bg-white hover:text-black hover:border-white
              hover:shadow-[0_0_20px_rgba(255,255,255,0.25)]
              hover:-translate-y-0.5
            "
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HeroSection;

