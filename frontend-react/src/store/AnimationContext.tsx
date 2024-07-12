import React, { createContext, useContext, useState, ReactNode } from 'react'

type ClickedElement = 'none' | 'howToPlay' | 'play'

interface AnimationContextType {
    clickedElement: ClickedElement
    setClickedElement: (element: ClickedElement) => void
}

const AnimationContext = createContext<AnimationContextType | undefined>(
    undefined
)

export const AnimationProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [clickedElement, setClickedElement] = useState<ClickedElement>('none')

    return (
        <AnimationContext.Provider
            value={{ clickedElement, setClickedElement }}
        >
            {children}
        </AnimationContext.Provider>
    )
}

export const useAnimationContext = () => {
    const context = useContext(AnimationContext)
    if (!context) {
        throw new Error(
            'useAnimationContext must be used within an AnimationProvider'
        )
    }
    return context
}
