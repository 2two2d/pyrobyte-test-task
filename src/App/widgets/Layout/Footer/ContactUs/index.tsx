import {ReactElement} from "react";
import BlockWithTitle from "@shared/ui/components/BlockWithTitle";
import FilledMapPinIcon from "@shared/ui/icons/FilledMapPinIcon";
import FacebookIcon from "@shared/ui/icons/social/FacebookIcon";
import VKIcon from "@shared/ui/icons/social/VKIcon";
import YouTubeIcon from "@shared/ui/icons/social/YouTubeIcon";
import InstagramIcon from "@shared/ui/icons/social/InstagramIcon/Index.tsx";

const ContactUsBlock = (): ReactElement => {
    return (
        <BlockWithTitle
            title={"CONTACT US"}
            content={
                <div className="flex flex-col gap-[40px]">
                    <p className="h2 text-nowrap">8 800 934 5959</p>

                    <div className="w-[256px] mobile:w-full flex gap-[12px]">
                        <FilledMapPinIcon/>

                        <div className="text-primary opacity-[64%] !text-[14px]">
                            <div className="mobile:hidden">
                                <p>2545 W. Diversey Ave.</p>
                                <p className="text-nowrap"></p>
                            </div>

                            <div className="hidden mobile:block">
                                <p>2545 W. Diversey Ave. 3rd Floor Chicago, IL 60647</p>
                            </div>
                        </div>
                    </div>

                    <div
                        className="w-[232px] mobile:w-full h-[40px] mt-[20px] mobile:px-[27px] mobile:-mt-2
                            flex gap-[24px] mobile:gap-0 mobile:justify-between [&_*]:cursor-pointer hover:[&_*]:opacity-90"
                    >
                        <FacebookIcon/>

                        <VKIcon/>

                        <YouTubeIcon/>

                        <InstagramIcon/>
                    </div>
                </div>
            }
            className="mobile:w-[327px] mobile:mt-4"
        />
    )
}

export default ContactUsBlock