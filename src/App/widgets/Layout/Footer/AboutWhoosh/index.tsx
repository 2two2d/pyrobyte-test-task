import {ReactElement} from "react";
import BlockWithTitle from "@shared/ui/components/BlockWithTitle";
import TwoMapPinsIcon from "@shared/ui/icons/TwoMapPinsIcon";

const AboutWhooshBlock = (): ReactElement => {
    return (
        <BlockWithTitle
            title={"ABOUT WHOOSH"}
            content={
                <div className="relative">
                    <p className="text-primary !text-[14px] opacity-[66%] w-[250px]">
                        Express delivery of documents and parcels for organizations, express delivery of correspondence,
                        purchases and other goods
                    </p>

                    <TwoMapPinsIcon className="relative bottom-[95px] left-[-60px]"/>
                </div>
            }
            className={"w-[240px] [&_hr]:invisible mobile:ml-8 mobile:mb-[-30px] " +
                "mobile:[&_div:nth-child(1)]:!-translate-x-[55px] mobile:[&_p:nth-child(1)]:!-mb-1"}
        />
    )
}

export default AboutWhooshBlock