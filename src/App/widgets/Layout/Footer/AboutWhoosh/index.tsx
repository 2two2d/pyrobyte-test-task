import {ReactElement} from "react";
import BlockWithTitle from "@shared/ui/components/BlockWithTitle";

const AboutWhooshBlock = (): ReactElement => {
    return (
        <BlockWithTitle
            title={"ABOUT WHOOSH"}
            content={
                <p className="text-primary opacity-[66%] w-[240px]">
                    Express delivery of documents and parcels for organizations, express delivery of correspondence, purchases and other goods
                </p>
            }
            className={"w-[240px] [&_hr]:invisible"}
        />
    )
}

export default AboutWhooshBlock