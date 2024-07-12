import React from 'react'
import Button from '../../../components/ui/Button'
import { MenuIcon } from '../../../components/icons/MenuIcon'
import useIsBreakpoint from '../../../hooks/use-is-breakpoint'
import { SecondaryHeading } from '../../../components/ui/Heading'
import Card from '../../../components/ui/Card'
import Modal from '../../../components/ui/Modal'

type MenuProps = {
    category: string
}

const Menu = ({ category }: MenuProps) => {
    const { isMobile, isTablet } = useIsBreakpoint()

    return (
        <>
            <div className="flex gap-1 sm:gap-6 md:gap-10 items-center">
                <Button
                    variant={'tertiary'}
                    Icon={() => (
                        <MenuIcon
                            size={
                                isMobile ? '18px' : isTablet ? '24px' : '36px'
                            }
                        />
                    )}
                    href="?modal-menu=1"
                />
                <SecondaryHeading title={category} />
            </div>
            <Modal path="modal-menu" buttonEnd="Quit game">
                <Card.Title>Paused</Card.Title>
                <div className="flex flex-col gap-6 items-center sm:gap-10">
                    <Card.Button href={'/' + category} variant={'primary'}>
                        Continue
                    </Card.Button>
                    <Card.Button href="/pick-category" variant={'primary'}>
                        New Category
                    </Card.Button>
                </div>
            </Modal>
        </>
    )
}

export default Menu
