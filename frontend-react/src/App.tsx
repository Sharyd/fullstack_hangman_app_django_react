import { RouterProvider } from 'react-router-dom'

import { router } from './screens/routes'
import { AnimationProvider } from './store/AnimationContext'
import ErrorBoundary from './components/ErrorBoundary'

function App() {
    // throw new Error('Test error')
    return (
        <AnimationProvider>
            <main className="p-3 md:p-8 min-h-screen w-full items-center justify-center flex background-bg">
                <RouterProvider router={router} />
            </main>
        </AnimationProvider>
    )
}

export default App
