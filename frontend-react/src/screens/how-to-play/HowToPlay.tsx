import React from 'react'

import Container from '../../components/ui/Container'
import Card from './components/Card'
import ContainerButtonHeading from '../../components/shared/ContainerButtonHeading'
import { useFetchQuery } from '../../hooks/use-fetch-query'

interface HowToPlayStep {
    number: string
    title: string
    description: string
}

const HowToPlay = () => {
    const {
        data: steps,
        isLoading,
        error,
    } = useFetchQuery<HowToPlayStep[]>('/how-to-play/', ['howToPlay'])

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>An error occurred: {error.message}</div>

    return (
        <Container type="flex">
            <ContainerButtonHeading size="l" title="How to play" />
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 md:gap-10">
                {steps?.map((item) => (
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
