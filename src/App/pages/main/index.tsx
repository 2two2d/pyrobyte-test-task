import { ReactNode } from "react";

const MainPage = (): ReactNode => {
    return (
        <div className="mt-[20px] flex flex-col gap-[15px]">
            <h1>H1</h1>
            <h2>H2</h2>
            <h3>H3</h3>
            <h4>H4</h4>
            <h5>H5</h5>
            <p className="text-primary">primary text</p>
            <p className="text-secondary">secondary text</p>
            <p className="text-menu">menu text</p>
            <p className="text-price">$136.44</p>
        </div>
    )
}

export default MainPage