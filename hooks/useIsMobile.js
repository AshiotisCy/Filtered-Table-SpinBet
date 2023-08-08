import { useState, useEffect } from 'react';

function useIsMobile(breakpoint = 850) {
    const [isMobileView, setIsMobileView] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsMobileView(window.innerWidth <= breakpoint);

            const handleResize = () => {
                setIsMobileView(window.innerWidth <= breakpoint);
            };

            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, [breakpoint]);

  return isMobileView;
}

export default useIsMobile;
