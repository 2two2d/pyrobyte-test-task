import {useCallback, useEffect, useState} from "react";

interface IScreenSizes {
    [key: string]: number
}

const SCREEN_SIZES: IScreenSizes = {
    mobile: 360
}

interface IUseIsThinnerThanMobileReturn {
    isThinnerThanMobile(): boolean
}

const useIsThinnerThanMobile = (): IUseIsThinnerThanMobileReturn => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const isThinnerThanMobile = useCallback(() => {
        return width < SCREEN_SIZES.mobile
    }, [width]);

    return {
        isThinnerThanMobile
    }
}

export {
    SCREEN_SIZES,
    useIsThinnerThanMobile
}