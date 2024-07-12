import React from 'react'
import Button from '../ui/Button'
import { BackIcon } from '../icons/BackIcon'
import useIsBreakpoint from '../../hooks/use-is-breakpoint'
import { Heading } from '../ui/Heading'
import { useNavigate } from 'react-router-dom'
import PulsingAnimation from '../animations/PulsingAnimation'

const ContainerButtonHeading = () => {
    const { isMobile, isTablet } = useIsBreakpoint()
    const navigate = useNavigate()

    const handleBack = () => {
        navigate(-1)
    }

    return (
        <div className="flex flex-col lg:flex-row justify-between lg:mb-8 gap-10 2xl:mb-20 items-start lg:items-center w-full">
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

            <Heading className="m-auto" size="xl" title="How to play" />
        </div>
    )
}

export default ContainerButtonHeading
