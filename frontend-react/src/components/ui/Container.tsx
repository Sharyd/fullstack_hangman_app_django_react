import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

type ContainerProps = {
    children?: React.ReactNode
    type?: 'flex' | 'default'
} & React.HTMLAttributes<HTMLDivElement>

const containerVariants = cva('m-auto z-10 w-full container-padding', {
    variants: {
        containerType: {
            default: '',
            flex: 'flex justify-center items-center flex-col gap-2',
            grid: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10',
        },
    },
})

const Container = ({ children, type }: ContainerProps) => {
    return (
        <section className={containerVariants({ containerType: type })}>
            {children}
        </section>
    )
}

export default Container
