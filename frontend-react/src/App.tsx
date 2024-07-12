import { RouterProvider } from 'react-router-dom'

import { router } from './screens/routes'
import { AnimationProvider } from './store/AnimationContext'

function App() {
    return (
        <AnimationProvider>
            <main className="p-3 md:p-8 min-h-screen w-full items-center justify-center flex bg-game-mobile-bg md:bg-game-tablet-bg xl:bg-game-desktop-bg bg-cover bg-center bg-no-repeat">
                <RouterProvider router={router} />
            </main>
        </AnimationProvider>
    )
}

export default App
