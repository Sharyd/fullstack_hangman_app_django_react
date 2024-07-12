import React from 'react'
import Menu from './Menu'
import HeartBar from './HeartBar'

type HeaderProps = {
    category: string
    heartPercentage: number
}

const Header = ({ category, heartPercentage }: HeaderProps) => {
    return (
        <header className="w-full">
            <nav className="flex justify-between w-full ">
                <Menu category={category} />
                <HeartBar progress={heartPercentage} />
            </nav>
        </header>
    )
}

export default Header
