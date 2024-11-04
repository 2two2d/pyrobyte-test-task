import {ReactNode} from "react";
import Carousel from "react-multi-carousel";
import {PAYMENT_METHODS_IMAGES} from "@widgets/PaymentMethods/data";
import CustomCarouselRightArrow from "@shared/ui/components/CustomCarouselRightArrow";
import CustomCarouselLeftArrow from "@shared/ui/components/CustomCarouselLeftArrow";
import "react-multi-carousel/lib/styles.css"
import {CAROUSEL_RESPONSIVE} from "@shared/consts";
import {useIsThinnerThanMobile} from "@shared/utils/is-thinner-than";

const PaymentMethods = (): ReactNode => {
    const { isThinnerThanMobile } = useIsThinnerThanMobile()

    return (
        <div className="w-[1366px] h-[344px] mobile:w-full mobile:h-[224px] flex flex-col items-center">
            <p className="h1 mt-[98px] mobile:mt-[54px]">Payment methods</p>

            <Carousel
                arrows={ !isThinnerThanMobile }
                autoPlaySpeed={2000}
                containerClass="w-[1160px] mobile:w-full mt-[70px] mobile:mt-[34px]"
                itemClass="!flex !justify-center"
                draggable
                infinite
                minimumTouchDrag={80}
                pauseOnHover
                renderButtonGroupOutside
                shouldResetAutoplay
                slidesToSlide={1}
                swipeable
                responsive={ {
                    ...CAROUSEL_RESPONSIVE,
                    mobile: {
                        ...CAROUSEL_RESPONSIVE.mobile,
                        items: 2
                    }
                }}
                autoPlay
                customRightArrow={ <CustomCarouselLeftArrow/> }
                customLeftArrow={ <CustomCarouselRightArrow/> }
            >
                { PAYMENT_METHODS_IMAGES.map(( { path, alt }, id ) => {
                    return (
                        <img
                            src={ path }
                            alt={ alt }
                            width={ 84 }
                            height={ 56 }
                            className="cursor-pointer"
                            key={ id }
                        />
                    )
                }) }
            </Carousel>
        </div>
    )
}

export default PaymentMethods