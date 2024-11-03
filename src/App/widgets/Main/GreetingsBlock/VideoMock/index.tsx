import PlayIcon from "@shared/ui/icons/PlayIcon";
import {ReactElement} from "react";
import VideoMockUpImage from "@shared/ui/assets/images/VideoMockUpImage.png"
import {IClassName} from "@shared/interface/helprers";

const VideoMock = ({ className }: IClassName): ReactElement => {
    return (
        <div className={ `w-[374px] h-[286px] flex flex-col justify-between ${ className }` }>
            <h3>How it works</h3>

            <div className="h-[232px] w-full relative flex justify-center items-center">
                <img src={VideoMockUpImage} alt="video"/>

                <PlayIcon className="absolute hover:scale-[1.375] transition-transform cursor-pointer"/>
            </div>
        </div>
    )
}

export default VideoMock