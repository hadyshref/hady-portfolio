import { motion } from "framer-motion";

export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center p-4 border-t-[0.5px] border-white"
        >
            <p className="text-sm text-neutral-400">
                © 2025 Hady Sherif. All rights reserved.
            </p>
        </motion.footer>
    );
}

