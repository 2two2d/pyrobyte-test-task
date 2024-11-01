import { ReactNode } from "react";
import About from "@widgets/About";

const MainPage = (): ReactNode => {
    return (
        <div className="mt-[20px] min-h-[100vh] flex flex-col items-center flex-grow">
            <About/>
        </div>
    )
}

export default MainPage