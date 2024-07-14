import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ShakeAnimation from '../../../components/animations/ShakeAnimation'
import { HeartIcon } from '../../../components/icons/HeartIcon'
import { cn } from '../../../utils/classNames'
import { HEARTS } from '../Game'
import BarProgress from './BarProgress'

type HeartProps = {
    progress: number
    wrongGuesses: number
}

const HeartBar = ({ progress, wrongGuesses }: HeartProps) => {
    const [showPulse, setShowPulse] = useState(false)

    useEffect(() => {
        if (wrongGuesses > 0 && progress !== 0) {
            setShowPulse(true)
            const timer = setTimeout(() => setShowPulse(false), 400)
            return () => clearTimeout(timer)
        }
    }, [wrongGuesses, progress])

    return (
        <div className="flex gap-3 sm:gap-3 md:gap-6 items-center">
            <BarProgress progress={progress} />
            <ShakeAnimation isShaking={progress === 0 && wrongGuesses > 0}>
                <AnimatePresence>
                    {showPulse && (
                        <motion.div
                            initial={{ scale: 1, opacity: 1 }}
                            animate={{ scale: 1.7, opacity: 0 }}
                            exit={{ scale: 1, opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="absolute"
                        >
                            <HeartIcon />
                        </motion.div>
                    )}
                </AnimatePresence>
                <HeartIcon />
            </ShakeAnimation>
        </div>
    )
}

export default HeartBar
