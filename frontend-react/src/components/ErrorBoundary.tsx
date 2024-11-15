import React, { Component, ErrorInfo, ReactNode } from 'react'
import ErrorFallback from './ui/ErrorFallback'

interface ErrorBoundaryProps {
    children: ReactNode
}

interface ErrorBoundaryState {
    hasError: boolean
    error: Error | null
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props)
        this.state = { hasError: false, error: null }
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { hasError: true, error }
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('ErrorBoundary caught an error:', error, errorInfo)
    }

    render() {
        console.log(this.state.hasError)
        if (this.state.hasError) {
            return <ErrorFallback error={this.state.error} />
        }

        return this.props.children
    }
}

export default ErrorBoundary
