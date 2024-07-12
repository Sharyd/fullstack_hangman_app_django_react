import React from 'react'
import { motion } from 'framer-motion'

const bubbleFadeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
        opacity: 1,
        scale: 1,
        transition: {
            delay: i * 0.2,
            duration: 0.6,
        },
    }),
}

type BubbleFadeAnimationProps = {
    index: number
    children: React.ReactNode
}

const BubbleFadeAnimation: React.FC<BubbleFadeAnimationProps> = ({
    index,
    children,
}) => {
    return (
        <motion.div
            className="flex items-center flex-wrap gap-10 w-full"
            initial="hidden"
            animate="visible"
            custom={index}
            variants={bubbleFadeVariants}
        >
            {children}
        </motion.div>
    )
}

export default BubbleFadeAnimation
