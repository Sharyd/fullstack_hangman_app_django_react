import React from 'react'
import Button from '../ui/Button'
import { BackIcon } from '../icons/BackIcon'
import useIsBreakpoint from '../../hooks/use-is-breakpoint'
import { Heading } from '../ui/Heading'
import { useNavigate } from 'react-router-dom'

type ContainerButtonHeadingProps = {
    title: string
    size?: 'xl' | 'l' | 'm' | 's'
}

const ContainerButtonHeading = ({
    title,
    size,
}: ContainerButtonHeadingProps) => {
    const { isMobile, isTablet } = useIsBreakpoint()
    const navigate = useNavigate()

    const handleBack = () => {
        navigate(-1)
    }

    return (
        <div className="flex flex-col lg:flex-row justify-between mb-8 gap-10 md:gap-0 2xl:mb-20 items-start lg:items-center w-full">
            <Button
                onClick={handleBack}
                className="pulse-hover"
                variant={'tertiary'}
                Icon={() => (
                    <BackIcon
                        size={isMobile ? '20px' : isTablet ? '30px' : '40px'}
                    />
                )}
            />

            <Heading className="m-auto" size={size || 'xl'} title={title} />
        </div>
    )
}

export default ContainerButtonHeading
