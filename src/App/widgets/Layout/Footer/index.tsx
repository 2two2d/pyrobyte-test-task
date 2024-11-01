import {ReactNode} from "react";
import AboutWhooshBlock from "@widgets/Layout/Footer/AboutWhoosh";
import ContactUsBlock from "@widgets/Layout/Footer/ContactUs";
import MenuBlock from "@widgets/Layout/Footer/Menu";
import ServicesBlock from "@widgets/Layout/Footer/Services";
import MadeByBlock from "@widgets/Layout/Footer/MadeBy";
import PrivacyPolicy from "@widgets/Layout/Footer/PrivacyPolicy";

const Footer = (): ReactNode => {
    return (
        <div className="w-full h-[528px] flex flex-col items-center bg-bg-lightBlue shrink-0">
            <div className="w-[1366px] h-[272px] mt-[85px] flex flex-row gap-[60px] justify-center">
                <AboutWhooshBlock/>

                <MenuBlock/>

                <ServicesBlock/>

                <ContactUsBlock/>
            </div>

            <MadeByBlock className="mt-[30px]"/>

            <PrivacyPolicy className="mt-[13px]"/>
        </div>
    )
}

export default Footer