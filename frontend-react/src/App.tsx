import { RouterProvider } from 'react-router-dom'
import { router } from './screens/routes'
import { AnimationProvider } from './store/AnimationContext'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 60 * 1000, // 1 minute
            gcTime: 5 * 60 * 1000, // 5 minutes
        },
    },
})

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <AnimationProvider>
                <main className="p-2 md:p-8 min-h-screen  flex flex-col items-center justify-center w-full background-bg">
                    <RouterProvider router={router} />
                </main>
            </AnimationProvider>
        </QueryClientProvider>
    )
}

export default App
