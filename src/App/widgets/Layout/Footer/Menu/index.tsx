import {ReactElement} from "react";
import BlockWithTitle from "@shared/ui/components/BlockWithTitle";
import CustomLink from "@shared/ui/components/Link";

const MenuBlock = (): ReactElement => {
    return (
        <BlockWithTitle
            title={"ABOUT WHOOSH"}
            content={
                <div className="flex flex-col gap-[10px]">
                    <CustomLink text={"About company"} to={''}/>

                    <CustomLink text={"Contact"} to={''}/>

                    <CustomLink text={"Rules"} to={''}/>

                    <CustomLink text={"FAQ"} to={''}/>

                    <CustomLink text={"Reviews"} to={''}/>

                    <CustomLink text={"Cargo transportation"} to={''}/>

                    <CustomLink text={"Tariffs"} to={''}/>
                </div>
            }
        />
    )
}

export default MenuBlock