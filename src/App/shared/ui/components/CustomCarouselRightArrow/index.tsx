import {ArrowProps} from "react-multi-carousel"
import LeftIcon from "@shared/ui/icons/LeftArrow";

const CustomCarouselLeftArrow = ({ onClick }: ArrowProps) => {
    return (
        <button onClick={ onClick } className="absolute">
            <LeftIcon/>
        </button>
    )
}

export default CustomCarouselLeftArrow