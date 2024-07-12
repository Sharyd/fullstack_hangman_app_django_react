import React from 'react'
import Letter from '../../../components/ui/Letter'

const AZkeyboard = 'abcdefghijklmnopqrstuvwxyz'.split('')

type KeyBoardProps = {
    onSetGuessedLetters: (letter: string) => void
    onHandleCheckIfGuessed: (letter: string) => void
    guessedLetters: {
        letter: string
    }[]
    fullWord: string
}

const Keyboard = ({
    onSetGuessedLetters,
    onHandleCheckIfGuessed,
    guessedLetters,
    fullWord,
}: KeyBoardProps) => {
    const handleStateKeyboard = (letter: string) => {
        return guessedLetters.find((gl) => gl.letter === letter)
    }

    return (
        <div className="flex flex-wrap items-center justify-center gap-4 max-w-[1000px]">
            {AZkeyboard.map((letter, index) => (
                <div key={index} className="flex gap-4 items-center">
                    <Letter
                        onClick={() => {
                            onSetGuessedLetters(letter)
                            onHandleCheckIfGuessed(letter)
                        }}
                        key={index}
                        // disabled={fullWord.length === guessedLetters.length}
                        letter={letter}
                        letterType="keyboard"
                        letterState={
                            handleStateKeyboard(letter) ? 'disabled' : 'default'
                        }
                    />
                </div>
            ))}
        </div>
    )
}

export default Keyboard
