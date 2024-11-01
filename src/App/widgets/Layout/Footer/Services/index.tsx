import {ReactElement} from "react";
import BlockWithTitle from "@shared/ui/components/BlockWithTitle";
import CustomLink from "@shared/ui/components/Link";

const ServicesBlock = (): ReactElement => {
    return (
        <BlockWithTitle
            title={"SERVICES"}
            content={
                <div className="flex flex-col gap-[9px] [&_a]:!text-[14px]">
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