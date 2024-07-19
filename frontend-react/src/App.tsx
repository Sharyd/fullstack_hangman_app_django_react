import { RouterProvider } from 'react-router-dom'
import { router } from './screens/routes'
import { AnimationProvider } from './store/AnimationContext'

function App() {
    return (
        <AnimationProvider>
            <main className="p-1 md:p-8 min-h-screen w-full  background-bg">
                <RouterProvider router={router} />
            </main>
        </AnimationProvider>
    )
}

export default App
