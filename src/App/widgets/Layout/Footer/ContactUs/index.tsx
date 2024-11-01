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
            title={"ABOUT WHOOSH"}
            content={
                <div className="flex flex-col gap-[40px]">
                    <p className="h2 text-nowrap">8 800 934 5959</p>

                    <div className="w-[256px] flex gap-[12px]">
                        <FilledMapPinIcon/>

                        <div className="text-primary">
                            <p>2545 W. Diversey Ave.</p>
                            <p className="text-nowrap">3rd Floor Chicago, IL 60647</p>
                        </div>
                    </div>

                    <div className="w-[232px] h-[40px] mt-[29px] flex gap-[24px] [&_*]:cursor-pointer">
                        <FacebookIcon/>

                        <VKIcon/>

                        <YouTubeIcon/>

                        <InstagramIcon/>
                    </div>
                </div>
            }
        />
    )
}

export default ContactUsBlock