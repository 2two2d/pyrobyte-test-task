import {ReactNode} from "react";
import AboutWhooshBlock from "@widgets/Layout/Footer/AboutWhoosh";
import ContactUsBlock from "@widgets/Layout/Footer/ContactUs";
import MenuBlock from "@widgets/Layout/Footer/Menu";
import ServicesBlock from "@widgets/Layout/Footer/Services";

const Footer = (): ReactNode => {
    return (
        <div className="w-full h-[528px] flex flex-col items-center bg-bg-lightBlue">
            <div className="w-[1366px] h-[528px] flex flex-row gap-[60px] justify-center">
                <AboutWhooshBlock/>

                <MenuBlock/>

                <ServicesBlock/>

                <ContactUsBlock/>
            </div>
        </div>
    )
}

export default Footer