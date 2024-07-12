import { createBrowserRouter, Navigate } from 'react-router-dom'
import MainMenu from './main-menu/MainMenu'
import PickCategory from './pick-category/PickCategory'
import HowToPlay from './how-to-play/HowToPlay'
import Game from './game/Game'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainMenu />,
    },
    {
        path: '/pick-category',
        element: <PickCategory />,
    },
    {
        path: '/how-to-play',
        element: <HowToPlay />,
    },
    {
        path: ':category',
        element: <Game />,
    },
    {
        path: '*',
        element: <Navigate to="/" replace />,
    },
])
