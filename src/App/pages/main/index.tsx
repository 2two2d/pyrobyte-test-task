import {ReactNode} from "react";
import MainWidget from "@widgets/Main";
import ServicesBlock from "@widgets/ServicesBlock";
import Divider from "@shared/ui/components/Divider";
import OurPartners from "@widgets/OurPartners";
import WhatWeDo from "@widgets/WhatWeDo";
import PaymentMethods from "@widgets/PaymentMethods";
import About from "@widgets/About";

const MainPage = (): ReactNode => {
    return (
        <div className="w-full min-h-[100vh] flex flex-col items-center flex-grow">
            <MainWidget/>

            <ServicesBlock/>

            <Divider/>

            <OurPartners/>

            <WhatWeDo/>

            <PaymentMethods/>

            <Divider/>

            <About/>
        </div>
    )
}

export default MainPage