import React from 'react'
import Card from '../../components/ui/Card'
import { PlayIcon } from '../../components/icons/PlayIcon'
import FadeInAnimation from '../../components/animations/FadeInAnimation'
import PulsingAnimation from '../../components/animations/PulsingAnimation'

import { useNavigate } from 'react-router-dom'
import { useAnimationContext } from '../../store/AnimationContext'

const MainMenu = () => {
    const navigate = useNavigate()
    const { clickedElement, setClickedElement } = useAnimationContext()
    const handlePlayClick = () => {
        setClickedElement('play')
        navigate('/pick-category')
    }

    const handleHowToPlayClick = () => {
        setClickedElement('howToPlay')
        navigate('/how-to-play')
    }

    return (
        <FadeInAnimation>
            <Card>
                <Card.SubHeading top>The</Card.SubHeading>
                <Card.Title>Hangman</Card.Title>
                <Card.SubHeading bottom>Game</Card.SubHeading>
                <FadeInAnimation delay={0.3}>
                    <PulsingAnimation
                        isAnimated={
                            clickedElement === 'howToPlay' ||
                            clickedElement === 'play'
                        }
                    >
                        <Card.Button
                            className="m-auto my-10 md:my-16"
                            variant="play"
                            Icon={() => <PlayIcon />}
                            onClick={handlePlayClick}
                        />
                    </PulsingAnimation>
                </FadeInAnimation>
                <FadeInAnimation delay={0.6}>
                    <PulsingAnimation isAnimated={clickedElement === 'none'}>
                        <Card.Button onClick={handleHowToPlayClick}>
                            How to play
                        </Card.Button>
                    </PulsingAnimation>
                </FadeInAnimation>
            </Card>
        </FadeInAnimation>
    )
}

export default MainMenu
