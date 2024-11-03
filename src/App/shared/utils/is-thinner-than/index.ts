interface IScreenSizes {
    [key: string]: number
}

const SCREEN_SIZES: IScreenSizes = {
    mobile: 360
}

const isThinnerThanMobile = (): boolean => {
    return window.innerWidth <= SCREEN_SIZES.mobile
}

export {
    SCREEN_SIZES,
    isThinnerThanMobile
}