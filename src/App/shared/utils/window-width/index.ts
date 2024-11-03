import {useEffect, useState} from "react";

interface IUseWindowWidthReturn {
    width: number
}

export const useWindowWidth = (): IUseWindowWidthReturn => {
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

    return {
        width
    }
}