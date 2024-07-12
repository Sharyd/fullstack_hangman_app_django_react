import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../../utils/classNames'

const cardVariants = cva(
    'h-full gap-6 md:gap-8 flex flex-col items-center w-full px-5 py-7 md:p-8 2xl:p-12 bg-custom-white shadow-md rounded-4xl',
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
    Number: React.FC<NumberProps>
    Title: React.FC<TitleProps>
    Description: React.FC<DescriptionProps>
} = ({ children, className, ...props }) => {
    return (
        <div className={cn(cardVariants({ className }))} {...props}>
            {children}
        </div>
    )
}

type NumberProps = {
    children: React.ReactNode
    className?: string
}

const numberVariants = cva('text-custom-blue font-bold heading-l', {
    variants: {
        numberType: {
            default: '',
        },
    },
})

Card.Number = ({ children, className }: NumberProps) => {
    return <h2 className={cn(numberVariants({ className }))}>{children}</h2>
}

type TitleProps = {
    children: React.ReactNode
    className?: string
}

const titleVariants = cva('text-custom-dark-navy text-center heading-m')

Card.Title = ({ children, className }: TitleProps) => {
    return <h3 className={cn(titleVariants({ className }))}>{children}</h3>
}

type DescriptionProps = {
    children: React.ReactNode
    className?: string
}

const descriptionVariants = cva('text-center text-custom-dark-navy paragraph')

Card.Description = ({ children, className }: DescriptionProps) => {
    return <p className={cn(descriptionVariants({ className }))}>{children}</p>
}

export default Card
