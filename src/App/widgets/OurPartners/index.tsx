import {ReactElement} from "react";
import { PARTNERS_LOGOS } from "./data";
import HoverImage from "@features/HoverImage";
import SuitCaseIcon from "@shared/ui/icons/SuitCaseIcon";
import ButtonWithIcon from "@shared/ui/components/ButtonWithIcon";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"
import {CAROUSEL_RESPONSIVE} from "@shared/consts";

const OurPartners = (): ReactElement => {
    return (
        <div className="w-[1366px] mobile:w-full h-[320px] pt-[98px] mobile:pt-[44px] flex flex-col items-center">
            <div className="relative flex justify-center pl-[184px] mobile:pl-0">
                <p className="h1 mobile:text-[22px] mobile:leading-6">Our Partners</p>
                <ButtonWithIcon
                    text={ "Let's collaborate" }
                    PropsIcon={ <SuitCaseIcon/> }
                    className="relative left-[269px] mobile:hidden"
                />
            </div>

            <Carousel
                arrows={ false }
                containerClass="w-[1366px] mobile:w-full h-[57px] mt-[70px] mobile:mt-[36px]"
                itemClass="!flex !justify-center mx-[35px] mobile:mx-0"
                draggable
                infinite
                keyBoardControl
                minimumTouchDrag={40}
                centerMode
                pauseOnHover
                slidesToSlide={1}
                swipeable
                autoPlay
                autoPlaySpeed={ 3500 }
                rtl={false}
                responsive={ CAROUSEL_RESPONSIVE }
            >
                { PARTNERS_LOGOS.map(({ initialPath, hoverPath }, id) => {
                    return (
                        <HoverImage imageInitial={ initialPath } imageHover={ hoverPath } alt={ initialPath } key={ id }/>
                    )
                })}
            </Carousel>

            <ButtonWithIcon
                text={ "Let's collaborate" }
                PropsIcon={ <SuitCaseIcon/> }
                className="hidden mobile:block mt-[48px] w-[328px]"
            />
        </div>
    )
}

export default OurPartners