import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/classNames'
import { Link } from 'react-router-dom'

const buttonVariants = cva(
    'font-medium focus:outline-none transition duration-200 ease-in-out',
    {
        variants: {
            variant: {
                primary:
                    'px-8 md:px-16 py-2 bg-custom-blue heading-s hover:bg-custom-blue-light shadow-customInnerOuterBottom rounded-full border-custom-orange text-custom-white',
                secondary:
                    'px-8 md:px-16 py-2 heading-s rounded-full shadow-customInnerOuterBottomSecondary bg-transparent bg-gradient-primary hover:bg-gradient-primary-hover text-custom-white',
                tertiary:
                    'p-4 md:p-7 rounded-full bg-gradient-primary shadow-customInnerBottom hover:bg-gradient-primary-hover',
                category:
                    ' px-10 py-6 sm:py-16 sm:px-20 rounded-3xl heading-s sm:heading-m shadow-customInnerOuterBottomTertiary hover:bg-custom-blue-light bg-custom-blue text-custom-white',
                play: 'p-10 sm:p-12 rounded-full bg-gradient-primary shadow-customInnerOuterBottomQuaternary hover:bg-gradient-primary-hover hover:from-custom-lightPink hover:to-custom-lightPurple flex items-center justify-center',
            },
        },
        defaultVariants: {
            variant: 'primary',
        },
    }
)

export interface ButtonProps extends VariantProps<typeof buttonVariants> {
    children?: React.ReactNode
    Icon?: React.FC<React.SVGProps<SVGSVGElement>>
    href?: string
    isHovered?: boolean
    className?: string
    onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant,
    Icon,
    className,
    href,
    isHovered = false,
    onClick,
    ...props
}) => {
    const ButtonContent = () => (
        <>
            {children}
            {Icon && <Icon />}
        </>
    )

    const classes = cn(buttonVariants({ variant, className }))

    if (href) {
        return (
            <Link to={href} className={classes} onClick={onClick}>
                <ButtonContent />
            </Link>
        )
    }

    return (
        <button className={classes} onClick={onClick} {...props}>
            <ButtonContent />
        </button>
    )
}

export default Button
