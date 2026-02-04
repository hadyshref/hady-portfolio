import { motion } from "framer-motion";
import { contacts } from "../Data/DynamicData";

export default function ContactMe() {
    return (
        <section className="w-full py-20 flex justify-center px-4" id="contact-me">
            <div className="max-w-5xl w-full">

                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="text-center mb-14"
                >
                    <h2 className="text-white text-4xl md:text-5xl font-semibold tracking-wide">
                        Contact Me
                    </h2>
                    <p className="text-gray-400 mt-4 text-lg">
                        Let’s create something amazing together
                    </p>
                </motion.div>

                {/* Contact Container */}
                <div className="grid md:grid-cols-3 gap-8">
                    {contacts.map((item, index) => (
                        <motion.a
                            key={item.title}
                            href={item.link}
                            target="_blank"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                            className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center transition duration-500 hover:border-white/40 hover:-translate-y-2"
                        >
                            <item.icon
                                size={42}
                                className="text-white mb-6 group-hover:scale-110 transition"
                            />

                            <h3 className="text-white text-xl font-semibold">
                                {item.title}
                            </h3>

                            <p className="text-gray-400 mt-2 break-all">
                                {item.value}
                            </p>

                            <span className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-white/5 blur-xl"></span>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
