import {ReactElement, useState} from "react";

interface IHoverImageProps {
    imageInitial: string;
    imageHover: string;
    alt: string
}

const HoverImage = ({ imageInitial, imageHover, alt }: IHoverImageProps): ReactElement => {
    const [isHover, setIsHover] = useState<boolean>(false)

    const handleMouseOver = (): void => {
        setIsHover(true)
    }

    const handleMouseLeave = (): void => {
        setIsHover(false)
    }

    return (
        <div onMouseEnter={ handleMouseOver } onMouseOut={ handleMouseLeave }>
            <img src={ isHover ? imageInitial : imageHover } alt={ alt }/>
        </div>
    )
}

export default HoverImage