import { useState, useEffect } from 'react'

interface BreakpointState {
    isMobile: boolean
    isTablet: boolean
    isLaptop: boolean
    isSmallDesktop: boolean
    isAllBreakpoints: boolean
}

const MOBILE_BREAKPOINT = 375
const TABLET_BREAKPOINT = 768
const LAPTOP_BREAKPOINT = 1024
const SMALL_DESKTOP_BREAKPOINT = 1440

const useIsBreakpoint = (): BreakpointState => {
    const breakpointStateInitial = {
        isMobile: window.innerWidth <= MOBILE_BREAKPOINT,
        isTablet:
            window.innerWidth > MOBILE_BREAKPOINT &&
            window.innerWidth <= TABLET_BREAKPOINT,
        isLaptop:
            window.innerWidth > TABLET_BREAKPOINT &&
            window.innerWidth <= LAPTOP_BREAKPOINT,
        isSmallDesktop: window.innerWidth > SMALL_DESKTOP_BREAKPOINT,
        isAllBreakpoints:
            window.innerWidth <= MOBILE_BREAKPOINT ||
            window.innerWidth <= TABLET_BREAKPOINT ||
            window.innerWidth <= LAPTOP_BREAKPOINT ||
            window.innerWidth <= SMALL_DESKTOP_BREAKPOINT,
    }

    const [breakpointState, setBreakpointState] = useState<BreakpointState>(
        breakpointStateInitial
    )

    useEffect(() => {
        const handleResize = () => {
            setBreakpointState({
                isMobile: window.innerWidth <= MOBILE_BREAKPOINT,
                isTablet:
                    window.innerWidth > MOBILE_BREAKPOINT &&
                    window.innerWidth <= TABLET_BREAKPOINT,
                isLaptop:
                    window.innerWidth > TABLET_BREAKPOINT &&
                    window.innerWidth <= LAPTOP_BREAKPOINT,
                isSmallDesktop: window.innerWidth > LAPTOP_BREAKPOINT,
                isAllBreakpoints:
                    window.innerWidth <= MOBILE_BREAKPOINT ||
                    window.innerWidth <= TABLET_BREAKPOINT ||
                    window.innerWidth <= LAPTOP_BREAKPOINT ||
                    window.innerWidth <= SMALL_DESKTOP_BREAKPOINT,
            })
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return breakpointState
}

export default useIsBreakpoint
