import { motion } from 'framer-motion'
import React from 'react'

type FadeInProps = {
    children: React.ReactNode
    index?: number
}

const fadeInVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
        opacity: 1,
        scale: 1,
        transition: {
            delay: i * 0.2,
            duration: 0.4,
        },
    }),
}

const FadeInAnimation = ({ children, index }: FadeInProps) => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            custom={index}
            variants={fadeInVariants}
        >
            {children}
        </motion.div>
    )
}

export default FadeInAnimation
