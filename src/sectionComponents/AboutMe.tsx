import { motion } from "framer-motion";
import type { Variants, Transition } from "framer-motion";

// Container animation for stagger
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25, // controls spacing between paragraphs
    },
  },
};

// Item animation
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.42, 0, 0.58, 1], // TS-compatible cubic-bezier array
    } as Transition,
  },
};

const AboutMe = () => {
  return (
    <section className="text-white flex items-center justify-center py-12 md:py-24 px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        className="max-w-4xl text-center space-y-8"
      >
        <motion.h3
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold tracking-wide"
        >
          About Me
        </motion.h3>

        <motion.p variants={itemVariants} className="text-lg md:text-xl leading-relaxed">
          I’m a 25-year-old filmmaker with experience in Egypt and the UAE,
          focused on turning ideas into cinematic visual stories.
        </motion.p>

        <motion.p variants={itemVariants} className="text-lg md:text-xl leading-relaxed">
          I specialize in creating high-quality cinematic videos for brands,
          companies, and digital platforms — including reels and documentary-style content.
        </motion.p>

        <motion.p variants={itemVariants} className="text-lg md:text-xl leading-relaxed">
          I work closely with clients to understand their ideas and transform
          them into clear, engaging visual stories. From directing and shooting
          to editing, color grading, and sound design, I handle the full
          production process to ensure every video delivers impact.
        </motion.p>

        <motion.p variants={itemVariants} className="text-lg md:text-xl leading-relaxed">
          I’ve worked across multiple fields including medical content, events,
          social media campaigns, and documentary-style videos, always focusing
          on clean visuals, strong storytelling, and cinematic quality.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default AboutMe;



