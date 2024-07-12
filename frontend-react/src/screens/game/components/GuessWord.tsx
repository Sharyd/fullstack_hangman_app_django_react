import React from 'react'
import Letter from '../../../components/ui/Letter'
import ShakeAnimation from '../../../components/animations/ShakeAnimation'

type LetterState = {
    letter: string
}

type GuessWordProps = {
    fullWord: string
    guessedLetters: LetterState[]
}

const GuessWord: React.FC<GuessWordProps> = ({ fullWord, guessedLetters }) => {
    const displayWord = fullWord?.split('').map((letter) => {
        if (letter === ' ') return { type: 'space' }

        const generatedLetter = guessedLetters?.find(
            (gl) => gl.letter.toLowerCase() === letter.toLowerCase()
        )
        if (generatedLetter) {
            return {
                type: 'letter',
                letter: letter,
                state: 'default',
                isShaking: true,
            }
        }
        return {
            type: 'letter',
            letter: '_',
            state: 'disabled',
            isShaking: false,
        }
    })

    return (
        <div className="flex flex-wrap gap-4">
            {displayWord.map((item, index) => {
                if (item.type === 'space') {
                    return <div key={index} className="w-8" />
                }
                return (
                    <ShakeAnimation
                        key={index}
                        isShaking={item.isShaking ?? false}
                    >
                        <Letter
                            letter={item.letter as string}
                            letterType="playable"
                            letterState={item.state as 'default' | 'disabled'}
                        />
                    </ShakeAnimation>
                )
            })}
        </div>
    )
}

export default GuessWord
