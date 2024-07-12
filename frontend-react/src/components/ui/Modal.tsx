// src/components/ui/Modal.tsx
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Card from './Card'
import FadeInAnimation from '../animations/FadeInAnimation'

type ModalPaths = 'modal-menu' | 'modal-win' | 'modal-lose'

interface ModalProps {
    path: ModalPaths
    children: React.ReactNode
    buttonEnd: string
    url?: string
    onClose?: () => void
}

function Modal({ path, children, buttonEnd, onClose, url }: ModalProps) {
    const location = useLocation()
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)

    const closeModal = () => {
        const searchParams = new URLSearchParams(location.search)
        searchParams.delete(path)
        navigate(url ?? '/')
        setIsOpen(false)
        if (onClose) {
            onClose()
        }
    }

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search)
        const modalParam = searchParams.get(path)

        setIsOpen(!!modalParam)
    }, [location.search, path])

    if (!isOpen) return null

    return ReactDOM.createPortal(
        <dialog className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-70 z-[100] overflow-auto flex justify-center items-center">
            <FadeInAnimation>
                <Card className="flex flex-col gap-6 md:gap-2 pb-0">
                    {children}
                    <br />
                    <Card.Button variant="secondary" onClick={closeModal}>
                        {buttonEnd || 'Quit game'}
                    </Card.Button>
                </Card>
            </FadeInAnimation>
        </dialog>,
        document.body
    )
}

export default Modal
