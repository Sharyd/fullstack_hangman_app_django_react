import Container from '../../components/ui/Container'
import ContainerButtonHeading from '../../components/shared/ContainerButtonHeading'
import data from '../../data/data.json'
import { useState } from 'react'
import Button from '../../components/ui/Button'
import FadeInAnimation from '../../components/animations/FadeInAnimation'

const PickCategory = () => {
    const [categories, setCategories] = useState(data.categories || {})

    return (
        <Container type="flex">
            <ContainerButtonHeading title="Pick a category" size="l" />

            <div className="grid grid-cols-1 xl:grid-cols-3 text-center gap-6 md:gap-10 w-full">
                {Object.keys(categories).map((category, index) => (
                    <Button variant={'category'} href={'/' + category}>
                        <FadeInAnimation index={index}>
                            {category}
                        </FadeInAnimation>
                    </Button>
                ))}
            </div>
        </Container>
    )
}

export default PickCategory
