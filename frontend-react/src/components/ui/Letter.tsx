import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/classNames'

const letterVariants = cva(
    'flex items-center justify-center font-bold heading-s sm:heading-m rounded-2xl transition duration-150 ease-in-out',
    {
        variants: {
            letterType: {
                playable: 'w-12 h-12  sm:w-[5.5rem] sm:h-[5.5rem]',
                keyboard: 'w-12 h-12  sm:w-20 sm:h-20 px-6',
            },
            letterState: {
                default: '',
                disabled: 'cursor-not-allowed',
            },
        },
        compoundVariants: [
            {
                letterType: 'playable',
                letterState: 'default',
                class: 'bg-custom-blue shadow-customInnerOuterBottom text-custom-white curson-default',
            },
            {
                letterType: 'playable',
                letterState: 'disabled',
                class: 'bg-custom-blue shadow-customInnerOuterBottom text-custom-blue opacity-50',
            },
            {
                letterType: 'keyboard',
                letterState: 'default',
                class: 'bg-custom-white text-custom-dark-navy hover:bg-custom-blue hover:text-custom-white',
            },
            {
                letterType: 'keyboard',
                letterState: 'disabled',
                class: 'opacity-50 cursor-not-allowed bg-custom-white text-custom-dark-navy',
            },
        ],
        defaultVariants: {
            letterType: 'playable',
            letterState: 'default',
        },
    }
)

type LetterVariantsProps = VariantProps<typeof letterVariants>

interface LetterProps
    extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
    letter: string
    letterType?: LetterVariantsProps['letterType']
    letterState?: LetterVariantsProps['letterState']
    type?: 'submit' | 'reset' | 'button'
}

const Letter: React.FC<LetterProps> = ({
    letter,
    letterType,
    letterState,
    className,
    type = 'button',
    ...props
}) => {
    return (
        <button
            type={type}
            className={cn(
                letterVariants({ letterType, letterState, className })
            )}
            {...props}
        >
            {letter}
        </button>
    )
}

export default Letter
