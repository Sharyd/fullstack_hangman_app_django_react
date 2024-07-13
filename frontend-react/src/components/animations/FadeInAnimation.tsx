import { motion } from 'framer-motion'
import React from 'react'

type FadeInProps = {
    children: React.ReactNode
    index?: number
    delay?: number
}

const fadeInVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number, delay: number) => ({
        opacity: 1,
        scale: 1,
        transition: {
            delay: i ? i * 0.2 : delay,
            duration: 0.35,
        },
    }),
}

const FadeInAnimation = ({
    children,
    index,
    delay,
    ...motionProps
}: FadeInProps) => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={{
                visible: fadeInVariants.visible(index || 0, delay || 0.2),
                hidden: fadeInVariants.hidden,
            }}
            {...motionProps}
        >
            {children}
        </motion.div>
    )
}

export default FadeInAnimation
