import React from 'react'
import Menu from './Menu'
import HeartBar from './HeartBar'

type HeaderProps = {
    category: string
    heartPercentage: number
    wrongGuesses: number
}

const Header = ({ category, heartPercentage, wrongGuesses }: HeaderProps) => {
    return (
        <header className="w-full mb-auto h-full">
            <nav className="flex justify-between w-full ">
                <Menu category={category} />
                <HeartBar
                    wrongGuesses={wrongGuesses}
                    progress={heartPercentage}
                />
            </nav>
        </header>
    )
}

export default Header
