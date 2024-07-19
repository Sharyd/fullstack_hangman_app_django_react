import React from 'react'
import { motion } from 'framer-motion'
import { HEARTS } from '../Game'
type HangmanProps = {
    wrongGuesses: number
}

const Hangman = ({ wrongGuesses }: HangmanProps) => {
    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: () => ({
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: {
                    type: 'spring',
                    duration: 1.5,
                    bounce: 0,
                },
                opacity: { duration: 0.01 },
            },
        }),
    }

    const swing = {
        animate: {
            rotate: [0, 2, -2, 2, -2, 3, -3, 2, -2, 0],
            transition: {
                duration: 2.5,
                ease: 'easeInOut',
                times: [0, 0.1, 0.3, 0.5, 0.7, 0.8, 0.9, 1],
                repeat: Infinity,
                repeatDelay: 0.5,
            },
        },
    }

    return (
        <svg
            className="absolute   xl:opacity-100 top-16 -right-4 md:right-0 md:top-32 w-24 h-24 md:w-80 md:h-80"
            viewBox="0 0 250 200"
        >
            {/* Base and Vertical pole - these don't swing */}
            <motion.line
                x1="20"
                y1="230"
                x2="100"
                y2="230"
                stroke="white"
                strokeWidth={3}
                variants={draw}
                initial="hidden"
                animate="visible"
                custom={0}
            />
            {wrongGuesses > 0 && (
                <motion.line
                    x1="60"
                    y1="20"
                    x2="60"
                    y2="230"
                    stroke="white"
                    strokeWidth={3}
                    variants={draw}
                    initial="hidden"
                    animate="visible"
                    custom={1}
                />
            )}

            {/* Swinging part */}

            {/* Top bar */}
            {wrongGuesses > 1 && (
                <motion.line
                    x1="50"
                    y1="20"
                    x2="160"
                    y2="20"
                    stroke="white"
                    strokeWidth={3}
                    variants={draw}
                    initial="hidden"
                    animate="visible"
                    custom={2}
                />
            )}

            {/* circle */}

            {wrongGuesses > 2 && (
                <motion.circle
                    cx="140"
                    cy="20"
                    r="5"
                    fill="white"
                    stroke="white"
                    strokeWidth={3}
                    variants={draw}
                    initial="hidden"
                    animate="visible"
                    custom={3}
                />
            )}

            {/* Rope to neck */}
            {wrongGuesses > 3 && (
                <motion.line
                    x1="140"
                    y1="25"
                    x2="140"
                    y2="70"
                    stroke="white"
                    strokeWidth={3}
                    variants={draw}
                    initial="hidden"
                    animate="visible"
                    custom={4}
                />
            )}

            {/* Body parts */}
            <motion.g
                variants={swing}
                animate={wrongGuesses === HEARTS ? 'animate' : 'initial'}
                // transformOrigin="60 20"
            >
                {/* Head */}
                {wrongGuesses > 3 && (
                    <motion.path
                        d="M140 70 
                           C 150 70, 160 80, 160 90
                           C 160 100, 150 110, 140 110
                           C 130 110, 120 100, 120 90
                           C 120 80, 130 70, 140 70"
                        fill="none"
                        stroke="white"
                        strokeWidth={3}
                        variants={draw}
                        initial="hidden"
                        animate="visible"
                        custom={4}
                    />
                )}
                {/* dead eyes*/}
                {wrongGuesses > 3 && (
                    <>
                        <motion.path
                            d="M130 80 C 135 80, 145 85, 130 90"
                            fill="none"
                            stroke="white"
                            strokeWidth={3}
                            variants={draw}
                            initial="hidden"
                            animate="visible"
                            custom={4}
                        />
                        <motion.path
                            d="M150 80 C 145 80, 135 85, 150 90"
                            fill="none"
                            stroke="white"
                            strokeWidth={3}
                            variants={draw}
                            initial="hidden"
                            animate="visible"
                            custom={4}
                        />
                    </>
                )}

                {/* Mouth */}

                {wrongGuesses > 3 && (
                    <motion.path
                        d="M135 95 C 140 100, 145 100, 150 95"
                        fill="none"
                        stroke="white"
                        strokeWidth={3}
                        variants={draw}
                        initial="hidden"
                        animate="visible"
                        custom={5}
                    />
                )}

                {/* tongue */}
                {wrongGuesses > 3 && (
                    <motion.path
                        d="M140 100 C 140 105, 140 105, 140 100"
                        fill="none"
                        stroke="white"
                        strokeWidth={4}
                        variants={draw}
                        initial="hidden"
                        animate="visible"
                        custom={5}
                    />
                )}

                {/* Body */}
                {wrongGuesses > 4 && (
                    <motion.path
                        d="M140 110 C 140 140, 130 170, 140 190"
                        fill="none"
                        stroke="white"
                        strokeWidth={3}
                        variants={draw}
                        initial="hidden"
                        animate="visible"
                        custom={5}
                    />
                )}

                {/* Arms */}
                {wrongGuesses > 4 && (
                    <>
                        <motion.path
                            d="M140 130 C 130 140, 120 130, 110 140"
                            fill="none"
                            stroke="white"
                            strokeWidth={3}
                            variants={draw}
                            initial="hidden"
                            animate="visible"
                            custom={6}
                        />
                        <motion.path
                            d="M140 130 C 150 140, 160 130, 170 140"
                            fill="none"
                            stroke="white"
                            strokeWidth={3}
                            variants={draw}
                            initial="hidden"
                            animate="visible"
                            custom={6.5}
                        />
                    </>
                )}

                {/* Legs */}
                {wrongGuesses > 5 && (
                    <>
                        <motion.path
                            d="M140 190 C 130 200, 120 210, 110 220"
                            fill="none"
                            stroke="white"
                            strokeWidth={3}
                            variants={draw}
                            initial="hidden"
                            animate="visible"
                            custom={7}
                        />
                        <motion.path
                            d="M140 190 C 150 200, 160 210, 170 220"
                            fill="none"
                            stroke="white"
                            strokeWidth={3}
                            variants={draw}
                            initial="hidden"
                            animate="visible"
                            custom={7.5}
                        />
                    </>
                )}
            </motion.g>
        </svg>
    )
}

export default Hangman
