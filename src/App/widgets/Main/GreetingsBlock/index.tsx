import {ReactElement} from "react";
import VideoMock from "@widgets/Main/GreetingsBlock/VideoMock";
import ReadMore from "@widgets/Main/GreetingsBlock/ReadMore";
import {IClassName} from "@shared/interface/helprers";

const GreetingsBlock = ({ className }: IClassName): ReactElement => {
    return (
        <div className={ `w-[375px] mobile:w-[328px] h-[741px] mt-[30px] mobile:mt-0 flex flex-col text-nowrap ${className}` }>
            <h1 className="mobile:text-[24px] mobile:leading-8">Our service started <br/> work in New York</h1>

            <p className="text-primary mt-[34px] w-[380px] mobile:w-[335px] text-wrap">
                We make delivery exactly at the time you need - we can start to fulfill
                the order a few minutes after it arrives, or we can deliver on a specific day and hour.
            </p>

            <ReadMore className="mt-[30px]"/>

            <VideoMock className="mt-[80px] mobile:mt-[37px]"/>


        </div>
    )
}

export default GreetingsBlock