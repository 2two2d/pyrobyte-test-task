import PaymentAmericanExpressImage from "@shared/ui/assets/images/PaymentAmericanExpressImage.png"
import PaymentGpayImage from "@shared/ui/assets/images/PaymentGpayImage.png"
import PaymentIDunoWTFIsThisImage from "@shared/ui/assets/images/PaymentIDunoWTFIsThisImage.png"
import PaymentMasterCardImage from "@shared/ui/assets/images/PaymentMasterCardImage.png"
import PaymentUnionImage from "@shared/ui/assets/images/PaymentUnionImage.png"
import PaymentVisaImage from "@shared/ui/assets/images/PaymentVisaImage.png"
import {IImage} from "@shared/interface/image";

const PAYMENT_METHODS_IMAGES: IImage[] = [
    {
        path: PaymentAmericanExpressImage,
        alt: "PaymentAmericanExpressImage"
    },
    {
        path: PaymentGpayImage,
        alt: "PaymentGpayImage"
    },
    {
        path: PaymentIDunoWTFIsThisImage,
        alt: "PaymentIDunoWTFIsThisImage"
    },
    {
        path: PaymentMasterCardImage,
        alt: "PaymentMasterCardImage"
    },
    {
        path: PaymentUnionImage,
        alt: "PaymentUnionImage"
    },
    {
        path: PaymentVisaImage,
        alt: "PaymentVisaImage"
    },
]

export {
    PAYMENT_METHODS_IMAGES
}