import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const steps = [
    {
        id: "01",
        title: "Understand the vision",
        description:
            "I work closely with you to understand the brand, message, and goals behind each project.",
    },
    {
        id: "02",
        title: "Create the visual story",
        description:
            "From directing and shooting to editing, color grading, and sound design, I craft a cinematic visual that brings the idea to life.",
    },
    {
        id: "03",
        title: "Deliver with impact",
        description:
            "I deliver high-quality videos, professionally optimized and ready to publish across your platforms.",
    },
];

export default function ProcessTimeline() {
    const containerRef = useRef(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // fraction of container scrolled
            let visible = (windowHeight - rect.top) / (rect.height + windowHeight);

            // make it faster (increase speed)
            visible = Math.min(Math.max(visible * 1.5, 0), 1); // 1.5x faster

            setProgress(visible);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <section className="text-white py-12 md:py-32 px-6">
            <div className="max-w-5xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-20 text-center"
                >
                    <p className="text-sm tracking-widest text-neutral-400 mb-4">
                        HOW I WORK
                    </p>
                    <h2 className="text-4xl md:text-5xl font-semibold mb-24">
                        My Process
                    </h2>
                </motion.div>


                <div
                    ref={containerRef}
                    className="relative flex justify-center"
                >
                    {/* Timeline */}
                    <div className="relative">
                        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-px bg-neutral-700 h-[80%]" />
                        <div
                            className="absolute left-1/2 -translate-x-1/2 top-0 w-px bg-white transition-all duration-300"
                            style={{ height: `calc(${progress * 100}% - 190px)` }}
                        />

                        <div className="space-y-40">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={step.id}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.7, ease: "easeOut" }}
                                    className="relative flex flex-col items-center"
                                >
                                    <div className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-600 flex items-center justify-center text-m mb-6">
                                        {step.id}
                                    </div>
                                    <div className="max-w-xl">
                                        <h3 className="text-3xl md:text-4xl font-semibold mb-6">
                                            {step.title}
                                        </h3>
                                        <p className="text-neutral-400 text-lg md:text-xl leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
