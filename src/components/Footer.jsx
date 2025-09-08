import { motion } from "framer-motion"

export const Footer = () => {
    return (
        <motion.section className="footer"
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        viewport={{once: true}}
        transition={{duration: 0.6}}>
            <motion.p>
                <p>&copy; 2025 EhsanFathi. All rights reserved.</p>
            </motion.p>
        </motion.section>
    )
}