import { ReactNode } from "react";
import ServicesBlock from "@widgets/ServicesBlock";

const MainPage = (): ReactNode => {
    return (
        <div className="mt-[20px] flex flex-col gap-[15px]">
            <ServicesBlock/>
        </div>
    )
}

export default MainPage