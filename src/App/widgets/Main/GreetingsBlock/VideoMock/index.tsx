import PlayIcon from "@shared/ui/icons/PlayIcon";
import {ReactNode, useState} from "react";
import VideoMockUpImage from "@shared/ui/assets/images/VideoMockUpImage.png"
import {IClassName} from "@shared/interface/helprers";
import CarouselDots from "@features/CarouselDots";

const MAX_CAROUSEL_ITEMS = 4

const VideoMock = ({ className }: IClassName): ReactNode => {
    const [currentVideoId, setCurrentVideoId] = useState(0)

    const HandleDotClick = (value: number) => {
        setCurrentVideoId(value)
    }

    return (
        <div className={ `w-[374px] mobile:w-[328px] h-[286px] mobile:h-[270px] flex flex-col justify-between ${ className }` }>
            <h3 className="mobile:text-[20px] mobile:leading-6">How it works</h3>

            <div className="h-[232px] mobile:h-[200px] w-full relative flex justify-center items-center">
                <img src={VideoMockUpImage} alt="video"/>

                <PlayIcon className="absolute hover:scale-[1.375] transition-transform cursor-pointer"/>
            </div>

            <CarouselDots
                handleClick={ HandleDotClick }
                currentValue={ currentVideoId }
                itemsQuantity={ MAX_CAROUSEL_ITEMS }
            />
        </div>
    )
}

export default VideoMock