import {ReactElement} from "react";
import VideoMock from "@widgets/Main/GreetingsBlock/VideoMock";
import ReadMore from "@widgets/Main/GreetingsBlock/ReadMore";
import {IClassName} from "@shared/interface/helprers";

const GreetingsBlock = ({ className }: IClassName): ReactElement => {
    return (
        <div className={ `w-[375px] h-[741px] mt-[30px] flex flex-col text-nowrap ${className}` }>
            <h1>Our service started <br/> work in New York</h1>

            <p className="text-primary mt-[34px]">
                We make delivery exactly at the time you need - <br/> we can start to fulfill
                the order a few minutes <br/> after it arrives, or we can deliver on a specific <br/> day and hour.
            </p>

            <ReadMore className="mt-[30px]"/>

            <VideoMock className="mt-[80px]"/>
        </div>
    )
}

export default GreetingsBlock