import React from 'react'
import Container from '../../components/ui/Container'
import Header from './components/Header'
import GuessWord from './components/GuessWord'
import Keyboard from './components/Keyboard'
import { useParams } from 'react-router-dom'
import data from '../../data/data.json'
import { capitalize } from '../../utils/capitalize'
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

const Game = () => {
    const [guessedLetters, setGuessedLetters] = React.useState<LetterState[]>(
        []
    )
    const { category: categoryParams } = useParams<{ category: string }>()

    const [categories] = React.useState<data>(data.categories)
    const [category, setCategory] = React.useState<Category[] | null>(null)
    const [fullWord, setFullWord] = React.useState<string>('')
    const [wrongGuesses, setWrongGuesses] = React.useState<number>(0)
    const [heartPercentage, setHeartPercentage] = React.useState<number>(100)

    React.useEffect(() => {
        if (categoryParams) {
            const selectedCategory = categories[capitalize(categoryParams)]
            if (selectedCategory) {
                setCategory(selectedCategory)
            }
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
        const percentage = (100 / 6) * wrongGuesses
        setHeartPercentage(100 - percentage)
    }

    const handleWinOrLose = () => {
        if (!category) return
        if (wrongGuesses === 6) {
            alert('You lose')
        }

        const fullWordWithoutSpaces = fullWord.replace(/\s/g, '')

        const guessedWord = guessedLetters
            .map((gl) => gl.letter)
            .join('')
            .replace(/\s/g, '')

        if (fullWordWithoutSpaces.toLowerCase() === guessedWord.toLowerCase()) {
            alert('You win')
        }
    }

    React.useEffect(() => {
        handleSetHeartPercentage()
        const timeout = setTimeout(() => {
            handleWinOrLose()
        }, 500)

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

    return (
        <Container type="flex">
            <Header
                heartPercentage={heartPercentage}
                category={categoryParams || ''}
            />
            <div className="flex flex-col gap-24 mt-10 md:mt-20 items-center justify-center">
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
    )
}

export default Game
