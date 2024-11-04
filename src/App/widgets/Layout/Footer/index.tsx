import {ReactNode} from "react";
import AboutWhooshBlock from "@widgets/Layout/Footer/AboutWhoosh";
import ContactUsBlock from "@widgets/Layout/Footer/ContactUs";
import MenuBlock from "@widgets/Layout/Footer/Menu";
import ServicesBlock from "@widgets/Layout/Footer/Services";
import MadeByBlock from "@widgets/Layout/Footer/MadeBy";
import PrivacyPolicy from "@widgets/Layout/Footer/PrivacyPolicy";
import classname from "./index.module.scss"
import PrivacyPolicyAdaptive from "@widgets/Layout/Footer/PrivacyPolicyAdaptive";

const Footer = (): ReactNode => {
    return (
        <div className={ classname.footer }>
            <div className={ classname.faq }>
                <AboutWhooshBlock/>

                <MenuBlock/>

                <ServicesBlock/>

                <ContactUsBlock/>
            </div>

            <MadeByBlock className="mt-[40px] mobile:hidden"/>

            <PrivacyPolicy className="mt-[13px] mobile:hidden"/>

            <PrivacyPolicyAdaptive className="!hidden mobile:flex"/>
        </div>
    )
}

export default Footer