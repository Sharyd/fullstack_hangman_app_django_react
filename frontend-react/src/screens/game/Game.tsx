import React from 'react'
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
type LetterState = {
    letter: string
}

type data = {
    [key: string]: {
        name: string
        selected: boolean
    }[]
}

type Category = {
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

    const [categories] = React.useState<data>(data.categories)
    const [category, setCategory] = React.useState<Category[] | null>(null)
    const [categoryName, setCategoryName] = React.useState<string>('')
    const [fullWord, setFullWord] = React.useState<string>('')
    const [wrongGuesses, setWrongGuesses] = React.useState<number>(0)
    const [heartPercentage, setHeartPercentage] = React.useState<number>(100)
    const [gameState, setGameState] = React.useState<
        'playing' | 'won' | 'lost'
    >('playing')

    React.useEffect(() => {
        if (categoryParams) {
            setCategoryName(capitalize(categoryParams))
            setCategory(categories[categoryParams])
        }
    }, [categoryParams, categories])

    const handleRandomFullWord = () => {
        if (category) {
            const randomIndex = Math.floor(Math.random() * category.length)
            setCategory((prev: any) => {
                const newCategory = [...prev]
                newCategory[randomIndex].selected = true
                return newCategory
            })

            setFullWord(category[randomIndex].name)
        }
    }

    const handleCheckIfGuessed = (letter: string) => {
        if (fullWord.toLowerCase().includes(letter.toLowerCase())) {
            return true
        }

        if (guessedLetters.find((gl) => gl.letter === letter)) {
            return true
        }
        setWrongGuesses((prev) => prev + 1)
    }

    const handleSetHeartPercentage = () => {
        const percentage = (100 / HEARTS) * wrongGuesses
        setHeartPercentage(100 - percentage)
    }
    const handleWinOrLose = () => {
        if (wrongGuesses >= HEARTS) {
            setGameState('lost')
            return
        }

        if (fullWord) {
            const fullWordArray = fullWord.split('')
            const guessedLettersArray = guessedLetters.map((gl) => gl.letter)
            const isWin = fullWordArray.every((letter) =>
                guessedLettersArray.includes(letter)
            )
            if (isWin) {
                setGameState('won')
            }
        }
    }

    React.useEffect(() => {
        if (gameState !== 'playing') {
            navigate(`?modal-end=1`)
        }
    }, [gameState])
    React.useEffect(() => {
        handleSetHeartPercentage()
        const timeout = setTimeout(() => {
            handleWinOrLose()
        }, 400)

        return () => clearTimeout(timeout)
    }, [wrongGuesses, guessedLetters])

    React.useEffect(() => {
        if (fullWord) {
            return
        }
        handleRandomFullWord()
    }, [category, fullWord])

    const handleSetGuessedLetters = (letter: string) => {
        setGuessedLetters((prev) => [
            ...prev,
            {
                letter: letter,
            },
        ])
    }

    const handleResetGame = () => {
        setGuessedLetters([])
        setFullWord('')
        setWrongGuesses(0)
        setHeartPercentage(100)
        setGameState('playing')
        handleRandomFullWord()
    }

    return (
        <ErrorBoundary>
            <Container type="flex">
                <Header
                    wrongGuesses={wrongGuesses}
                    heartPercentage={heartPercentage}
                    category={categoryParams || ''}
                />
                <div className="flex flex-col gap-10 md:gap-20 mt-10 md:mt-20 items-center justify-center">
                    <GuessWord
                        fullWord={fullWord}
                        guessedLetters={guessedLetters}
                    />
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
