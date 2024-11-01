import {ReactElement} from "react";
import Carousel from "react-multi-carousel";
import {PAYMENT_METHODS_IMAGES} from "@widgets/PaymentMethods/data";
import "react-multi-carousel/lib/styles.css"
import CustomCarouselRightArrow from "@shared/ui/components/CustomCarouselRightArrow";
import CustomCarouselLeftArrow from "@shared/ui/components/CustomCarouselLeftArrow";

const PaymentMethods = (): ReactElement => {
    return (
        <div className="w-[1366px] h-[344px] flex flex-col items-center">
            <p className="h1 mt-[98px]">Payment methods</p>

            <Carousel
                arrows
                autoPlaySpeed={3000}
                containerClass="container-with-dots w-[1160px] mt-[70px]"
                itemClass="!flex !justify-center"
                draggable
                infinite
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderButtonGroupOutside
                shouldResetAutoplay
                slidesToSlide={1}
                swipeable
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 6,
                        partialVisibilityGutter: 40
                    }}}
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