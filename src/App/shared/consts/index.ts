import {ResponsiveType} from "react-multi-carousel";

const CAROUSEL_RESPONSIVE: ResponsiveType = {
    desktop: {
        breakpoint: {
            max: 3000,
            min: 1024
        },
        items: 6,
        partialVisibilityGutter: 40,

    },
    mobile: {
        breakpoint: {
            max: 360,
            min: 0
        },
        items: 1,
    },
}

export {
    CAROUSEL_RESPONSIVE
}