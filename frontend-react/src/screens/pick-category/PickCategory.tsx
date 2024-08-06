import Container from '../../components/ui/Container'
import ContainerButtonHeading from '../../components/shared/ContainerButtonHeading'
import Button from '../../components/ui/Button'
import FadeInAnimation from '../../components/animations/FadeInAnimation'
import { useFetchQuery } from '../../hooks/use-fetch-query'

import Loading from '../../components/ui/Loading'
import ErrorFallback from '../../components/ui/ErrorFallback'

const PickCategory = () => {
    const {
        data: categories,
        isLoading,
        error,
    } = useFetchQuery<Category[]>('/categories/', ['categories'])

    if (isLoading) return <Loading />
    if (error) return <ErrorFallback error={error} />

    return (
        <Container type="flex">
            <ContainerButtonHeading title="Pick a category" size="l" />

            <div className="grid grid-cols-1 xl:grid-cols-3 text-center gap-6 md:gap-10 w-full">
                {categories?.map((category, index) => (
                    <Button
                        key={category.name}
                        variant={'category'}
                        href={'/' + category.name}
                    >
                        <FadeInAnimation index={index}>
                            {category.name}
                        </FadeInAnimation>
                    </Button>
                ))}
            </div>
        </Container>
    )
}

export default PickCategory
