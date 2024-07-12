import { useState, useEffect } from 'react';

interface BreakpointState {
  isMobile: boolean;
  isTablet: boolean;
}

const MOBILE_BREAKPOINT = 375;
const TABLET_BREAKPOINT = 768;

const useIsBreakpoint = (): BreakpointState => {
  const [breakpointState, setBreakpointState] = useState<BreakpointState>({
    isMobile: window.innerWidth <= MOBILE_BREAKPOINT,
    isTablet: window.innerWidth > MOBILE_BREAKPOINT && window.innerWidth <= TABLET_BREAKPOINT,
  });

  useEffect(() => {
    const handleResize = () => {
      setBreakpointState({
        isMobile: window.innerWidth <= MOBILE_BREAKPOINT,
        isTablet: window.innerWidth > MOBILE_BREAKPOINT && window.innerWidth <= TABLET_BREAKPOINT,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return breakpointState;
};

export default useIsBreakpoint;
