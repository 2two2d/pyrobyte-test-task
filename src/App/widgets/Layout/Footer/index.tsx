import {ReactNode} from "react";
import AboutWhooshBlock from "@widgets/Layout/Footer/AboutWhoosh";
import ContactUsBlock from "@widgets/Layout/Footer/ContactUs";
import MenuBlock from "@widgets/Layout/Footer/Menu";
import ServicesBlock from "@widgets/Layout/Footer/Services";
import MadeByBlock from "@widgets/Layout/Footer/MadeBy";
import PrivacyPolicy from "@widgets/Layout/Footer/PrivacyPolicy";
import classname from "./index.module.scss"

const Footer = (): ReactNode => {
    return (
        <div className={ classname.footer }>
            <div className="w-[1366px] h-[272px] mt-[75px] flex flex-row gap-[60px] justify-center">
                <AboutWhooshBlock/>

                <MenuBlock/>

                <ServicesBlock/>

                <ContactUsBlock/>
            </div>

            <MadeByBlock className="mt-[40px]"/>

            <PrivacyPolicy className="mt-[13px]"/>
        </div>
    )
}

export default Footer