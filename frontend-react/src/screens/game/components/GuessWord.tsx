import React from 'react'
import Letter from '../../../components/ui/Letter'
import ShakeAnimation from '../../../components/animations/ShakeAnimation'
import useIsBreakpoint from '../../../hooks/use-is-breakpoint'

type LetterState = {
    letter: string
}

type GuessWordProps = {
    fullWord: string
    guessedLetters: LetterState[]
}

const GuessWord: React.FC<GuessWordProps> = ({ fullWord, guessedLetters }) => {
    const { isAllBreakpoints } = useIsBreakpoint()

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
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 items-center">
            {displayWord.map((item, index) => {
                if (item.type === 'space') {
                    return isAllBreakpoints ? (
                        <div
                            key={index}
                            className="w-full block my-1 md:my-1"
                        />
                    ) : (
                        <div key={index} className="w-9" />
                    )
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
