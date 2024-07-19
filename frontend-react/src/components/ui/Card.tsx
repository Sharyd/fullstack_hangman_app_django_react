import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/classNames'
import { Heading, SubHeading } from './Heading'
import Button, { ButtonProps as CustomButtonProps } from './Button'

const cardVariants = cva(
    'bg-gradient-secondary relative rounded-6xl opacity-85 min-h-[420px] md:min-h-[450px] w-[355px] sm:min-w-[600px] m-auto justify-center flex items-center flex-col shadow-customInnerOuterBottomQuinary p-12',
    {
        variants: {
            cardType: {
                default: '',
            },
        },
    }
)

interface CardProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof cardVariants> {}

const Card: React.FC<CardProps> & {
    Title: React.FC<TitleProps>
    SubHeading: React.FC<SubHeadingProps>
    Button: React.FC<CustomButtonProps>
} = ({ children, className, ...props }) => {
    return (
        <div className={cn(cardVariants({ className }))} {...props}>
            {children}
        </div>
    )
}

type TitleProps = {
    children: React.ReactNode
    className?: string
}

Card.Title = ({ children, className }: TitleProps) => {
    return (
        <div className="absolute -top-16 sm:-top-24">
            <Heading title={children} className={className} />
        </div>
    )
}

type SubHeadingProps = {
    children: React.ReactNode
    className?: string
    top?: boolean
    bottom?: boolean
}

Card.SubHeading = ({ children, className, top, bottom }: SubHeadingProps) => {
    const positionClass = top
        ? 'absolute -top-16 left-20 sm:-top-28 sm:left-40'
        : bottom
        ? 'absolute top-4 right-16 sm:-top-0 sm:right-40 '
        : ''
    return (
        <div className={positionClass}>
            <SubHeading title={children} className={className} />
        </div>
    )
}

Card.Button = Button

export default Card
