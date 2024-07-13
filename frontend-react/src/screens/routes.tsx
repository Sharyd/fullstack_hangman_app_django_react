import { createBrowserRouter, Navigate } from 'react-router-dom'
import MainMenu from './main-menu/MainMenu'
import PickCategory from './pick-category/PickCategory'
import HowToPlay from './how-to-play/HowToPlay'
import Game from './game/Game'
import ErrorBoundary from '../components/ErrorBoundary'
import { withErrorBoundary } from '../hoc/withErrorBoundary'

export const router = createBrowserRouter([
    {
        path: '/',
        element: withErrorBoundary(MainMenu),
    },
    {
        path: '/pick-category',
        element: withErrorBoundary(PickCategory),
    },
    {
        path: '/how-to-play',
        element: withErrorBoundary(HowToPlay),
    },
    {
        path: ':category',
        element: withErrorBoundary(Game),
    },
    {
        path: '*',
        element: <Navigate to="/" replace />,
    },
])
