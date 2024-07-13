import ErrorBoundary from '../components/ErrorBoundary'

export const withErrorBoundary = (Component: React.ComponentType) => (
    <ErrorBoundary>
        <Component />
    </ErrorBoundary>
)
