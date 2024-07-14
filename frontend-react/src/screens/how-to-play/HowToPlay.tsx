import React from 'react'
import Container from '../../components/ui/Container'

import Card from './components/Card'

import ContainerButtonHeading from '../../components/shared/ContainerButtonHeading'

const data = [
    {
        number: '01',
        title: 'Choose a category',
        description:
            'First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word.',
    },
    {
        number: '02',
        title: 'Guess letters',
        description:
            "Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If it's wrong, you lose some health, which empties after eight incorrect guesses.",
    },
    {
        number: '03',
        title: 'Win or lose',
        description:
            'You win by guessing all the letters in the word before your health runs out. If the health bar empties before you guess the word, you lose.',
    },
]

const HowToPlay = () => {
    return (
        <Container type="flex">
            <ContainerButtonHeading size="l" title="How to play" />
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 md:gap-10">
                {data.map((item) => (
                    <Card key={item.number}>
                        <div className="flex sm:flex-col gap-4 sm:items-center sm:gap-3 ">
                            <Card.Number>{item.number}</Card.Number>
                            <Card.Title>{item.title}</Card.Title>
                        </div>
                        <Card.Description>{item.description}</Card.Description>
                    </Card>
                ))}
            </div>
        </Container>
    )
}

export default HowToPlay
