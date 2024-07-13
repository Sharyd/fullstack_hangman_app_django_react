import React from 'react'
import Button from './Button'
import FadeInAnimation from '../animations/FadeInAnimation'
import PulsingAnimation from '../animations/PulsingAnimation'

interface ErrorFallbackProps {
    error: Error | null
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error }) => {
    const handleGoHome = () => {
        window.location.href = '/'
    }

    const handleReload = () => {
        window.location.reload()
    }

    return (
        <FadeInAnimation>
            <div className="min-h-screen flex items-center justify-center bg-transparent">
                <div className="bg-white p-6 md:p-10 flex flex-col items-center rounded-lg shadow-md max-w-md w-full">
                    <div className="flex items-center justify-cente flex-col text-custom-error">
                        <FadeInAnimation delay={0.3}>
                            <h2 className="heading-l">Opps!</h2>
                        </FadeInAnimation>
                        <FadeInAnimation delay={0.6}>
                            <h2 className="heading-s my-6">
                                Something went wrong
                            </h2>
                        </FadeInAnimation>
                    </div>
                    <p className="text-gray-700 mb-8">
                        We're sorry, but an unexpected error occurred. Our team
                        has been notified and we're working to fix it.
                    </p>
                    <p className="paragraph mb-6 text-center">
                        Error details: {error?.message || 'Unknown error'}
                    </p>
                    <div className="flex gap-6 flex-col items-center">
                        <PulsingAnimation isAnimated>
                            <Button onClick={handleReload} variant="primary">
                                Reload the page
                            </Button>
                        </PulsingAnimation>

                        <Button onClick={handleGoHome} variant="primary">
                            Go to home
                        </Button>
                    </div>
                </div>
            </div>
        </FadeInAnimation>
    )
}

export default ErrorFallback
