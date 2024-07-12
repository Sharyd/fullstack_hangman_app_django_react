import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/classNames'

const headingVariants = cva('font-bold text-center p-4 ', {
    variants: {
        size: {
            xl: 'heading-l sm:heading-xl text-gradient-stroke',
            m: 'heading-s sm:heading-m md:heading-l text-custom-white',
            s: 'heading-s  sm:heading-m text-gradient-subtitle-stroke',
        },
    },
    defaultVariants: {
        size: 'xl',
    },
})

type HeadingProps = {
    title: string | React.ReactNode
    className?: string
} & VariantProps<typeof headingVariants>

export const Heading = ({ title, className, size }: HeadingProps) => {
    return (
        <h2
            data-text={title}
            className={cn(headingVariants({ size }), className)}
        >
            {title}
        </h2>
    )
}

export const SubHeading = ({ title, className }: HeadingProps) => {
    return (
        <h2
            data-text={title}
            className={cn(headingVariants({ size: 's' }), className)}
        >
            {title}
        </h2>
    )
}

export const SecondaryHeading = ({ title, className }: HeadingProps) => {
    return (
        <h2 className={cn(headingVariants({ size: 'm' }), className)}>
            {title}
        </h2>
    )
}
