import {ArrowProps} from "react-multi-carousel";
import RightIcon from "@shared/ui/icons/RightArrow";

const CustomCarouselRightArrow = ({ onClick }: ArrowProps) => {
    return (
        <button onClick={ onClick } className="absolute right-0">
            <RightIcon/>
        </button>
    )
}

export default CustomCarouselRightArrow