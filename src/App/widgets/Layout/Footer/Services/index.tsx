import {ReactElement} from "react";
import BlockWithTitle from "@shared/ui/components/BlockWithTitle";
import CustomLink from "@shared/ui/components/Link";

const ServicesBlock = (): ReactElement => {
    return (
        <BlockWithTitle
            title={"ABOUT WHOOSH"}
            content={
                <div className="flex flex-col gap-[10px]">
                    <CustomLink text={"Online stores"} to={''}/>

                    <CustomLink text={"Legal entity"} to={''}/>

                    <CustomLink text={"API Integration"} to={''}/>

                    <CustomLink text={"Contract"} to={''}/>

                    <CustomLink text={"Jobs"} to={''}/>

                    <CustomLink text={"Courier job"} to={''}/>

                    <CustomLink text={"The blog"} to={''}/>
                </div>
            }
        />
    )
}

export default ServicesBlock