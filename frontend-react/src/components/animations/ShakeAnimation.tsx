// src/components/animations/ShakeAnimation.tsx
import React from 'react'
import { motion } from 'framer-motion'

type ShakeAnimationProps = {
    children: React.ReactNode
    isShaking: boolean
}

const shakeVariants = {
    shaking: {
        x: [0, -6, 6, -6, 6, -6, 6, -6, 6, 0],
        transition: {
            duration: 0.8,
            ease: 'easeInOut',
        },
    },
    still: { x: 0 },
}

const ShakeAnimation: React.FC<ShakeAnimationProps> = ({
    children,
    isShaking,
}) => {
    return (
        <motion.div
            variants={shakeVariants}
            animate={isShaking ? 'shaking' : 'still'}
        >
            {children}
        </motion.div>
    )
}

export default ShakeAnimation
