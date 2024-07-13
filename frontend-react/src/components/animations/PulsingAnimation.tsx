import React from 'react'
import { motion } from 'framer-motion'

type PulsingButtonProps = {
    children: React.ReactNode
    isAnimated?: boolean
    onHover?: () => void
}

const PulsingAnimation: React.FC<PulsingButtonProps> = ({
    children,
    isAnimated,
}) => {
    return (
        <motion.div
            initial={{ scale: 1 }}
            animate={{
                scale: [1, 1.07, 1],
                transition: {
                    duration: isAnimated ? 2 : 0,
                    repeat: isAnimated ? Infinity : 0,
                    repeatType: 'loop',
                },
            }}
            transition={{ duration: 0.6 }}
        >
            {children}
        </motion.div>
    )
}

export default PulsingAnimation
