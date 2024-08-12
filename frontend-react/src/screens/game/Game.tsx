import React, { useCallback, useEffect } from 'react'
import Container from '../../components/ui/Container'
import Header from './components/Header'
import GuessWord from './components/GuessWord'
import Keyboard from './components/Keyboard'
import { useNavigate, useParams } from 'react-router-dom'
import data from '../../data/data.json'
import { capitalize } from '../../utils/capitalize'
import Modal from '../../components/ui/Modal'
import Card from '../../components/ui/Card'
import ErrorBoundary from '../../components/ErrorBoundary'
import Hangman from './components/Hangman'
import { useFetchQuery } from '../../hooks/use-fetch-query'
import Loading from '../../components/ui/Loading'

import ErrorFallback from '../../components/ui/ErrorFallback'

type LetterState = {
    letter: string
}

type Word = {
    name: string
    selected: boolean
}

export const HEARTS = 6

const Game = () => {
    const [guessedLetters, setGuessedLetters] = React.useState<LetterState[]>(
        []
    )
    const { category: categoryParams } = useParams<{ category: string }>()
    const navigate = useNavigate()

    const [categoryName, setCategoryName] = React.useState<string>('')
    const [fullWord, setFullWord] = React.useState<string>('')
    const [wrongGuesses, setWrongGuesses] = React.useState<number>(0)
    const [heartPercentage, setHeartPercentage] = React.useState<number>(100)
    const [gameState, setGameState] = React.useState<
        'playing' | 'won' | 'lost'
    >('playing')

    const {
        data: words,
        isLoading,
        error,
        refetch: refetchWords,
    } = useFetchQuery<Word[]>(
        `/words/${encodeURIComponent(categoryParams || '')}/`,
        ['words', categoryParams],
        { enabled: !!categoryParams }
    )

    useEffect(() => {
        if (categoryParams) {
            setCategoryName(capitalize(categoryParams))
        }
    }, [categoryParams])

    const handleRandomFullWord = useCallback(() => {
        if (words && words.length > 0) {
            const unselectedWords = words.filter((word) => !word.selected)
            const wordPool =
                unselectedWords.length > 0 ? unselectedWords : words
            const randomIndex = Math.floor(Math.random() * wordPool.length)
            setFullWord(wordPool[randomIndex].name)
        }
    }, [words])

    useEffect(() => {
        if (words && !fullWord) {
            handleRandomFullWord()
        }
    }, [words, fullWord, handleRandomFullWord])

    const handleCheckIfGuessed = useCallback(
        (letter: string) => {
            if (fullWord.toLowerCase().includes(letter.toLowerCase())) {
                console.log(fullWord, letter)
                return true
            }
            if (!guessedLetters.some((gl) => gl.letter === letter)) {
                setWrongGuesses((prev) => prev + 1)
            }
            return false
        },
        [fullWord, guessedLetters]
    )

    const handleSetHeartPercentage = useCallback(() => {
        setHeartPercentage(100 - (100 / HEARTS) * wrongGuesses)
    }, [wrongGuesses])

    const handleGameStatus = useCallback(() => {
        if (wrongGuesses >= HEARTS) {
            setGameState('lost')
            return
        }
        if (guessedLetters.length === 0) return

        const guessedLettersSet = new Set(
            guessedLetters.map((gl) => gl.letter.toLowerCase())
        )
        const uniqueLettersInWord = new Set(
            fullWord
                .toLowerCase()
                .split('')
                .filter((char) => char !== ' ')
        )

        const isWon = Array.from(uniqueLettersInWord).every((letter) =>
            guessedLettersSet.has(letter)
        )

        if (isWon) setGameState('won')
    }, [wrongGuesses, guessedLetters, fullWord])

    React.useEffect(() => {
        if (gameState !== 'playing') {
            navigate(`?modal-end=1`)
        }
    }, [gameState, navigate])

    React.useEffect(() => {
        handleSetHeartPercentage()
        const timeout = setTimeout(() => {
            handleGameStatus()
        }, 400)

        return () => clearTimeout(timeout)
    }, [
        wrongGuesses,
        guessedLetters,
        handleSetHeartPercentage,
        handleGameStatus,
    ])

    const handleSetGuessedLetters = (letter: string) => {
        setGuessedLetters((prev) => [
            ...prev,
            {
                letter: letter,
            },
        ])
    }

    const handleResetGame = useCallback(() => {
        setGuessedLetters([])
        setFullWord('')
        setWrongGuesses(0)
        setHeartPercentage(100)
        setGameState('playing')
        handleRandomFullWord()
    }, [handleRandomFullWord])

    if (isLoading) return <Loading />
    if (error) return <ErrorFallback error={error} />

    return (
        <ErrorBoundary>
            <Container type="flex">
                <Header
                    wrongGuesses={wrongGuesses}
                    heartPercentage={heartPercentage}
                    category={categoryParams || ''}
                />
                <div className="flex flex-col gap-16 sm:gap-32 md:gap-20 mt-12 sm:my-32 md:my-20 items-center justify-between">
                    <div className="flex lg:max-h-60 max-w-[1000px] items-center gap-4 md:gap-4 justify-center">
                        <GuessWord
                            fullWord={fullWord}
                            guessedLetters={guessedLetters}
                        />
                        <Hangman wrongGuesses={wrongGuesses} />
                    </div>
                    <Keyboard
                        onHandleCheckIfGuessed={handleCheckIfGuessed}
                        onSetGuessedLetters={handleSetGuessedLetters}
                        guessedLetters={guessedLetters}
                        fullWord={fullWord}
                    />
                </div>
            </Container>
            <Modal path="modal-end" buttonEnd="Quit game">
                <Card.Title>
                    {gameState === 'won' ? 'You win' : 'You lose'}
                </Card.Title>
                <div className="flex flex-col gap-6 items-center sm:gap-10">
                    <Card.Button
                        onClick={handleResetGame}
                        href={'/' + categoryName}
                        variant={'primary'}
                    >
                        Play again
                    </Card.Button>
                    <Card.Button href="/pick-category" variant={'primary'}>
                        New Category
                    </Card.Button>
                </div>
            </Modal>
        </ErrorBoundary>
    )
}

export default Game
