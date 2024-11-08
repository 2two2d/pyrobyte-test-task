import {ReactElement} from "react";
import classname from "./index.module.scss"
import MainWidgetCover from "@shared/ui/assets/images/MainWidgetCoverImage.png"
import MainWidgetMobileCover from "@shared/ui/assets/images/MainWidgetMobileCoverImage.png"
import GreetingsBlock from "./GreetingsBlock";
import DeliveryBlock from "@widgets/Main/DeliveryBlock";

const MainWidget = (): ReactElement => {
    return (
        <div className={ classname.widget }>
            <div className={classname.container}>
                <img
                    src={MainWidgetMobileCover}
                    alt="image"
                    className={classname.mobileCover}
                    width={328}
                    height={190}
                />

                <GreetingsBlock className="z-10"/>

                <img
                    src={MainWidgetCover}
                    alt="image"
                    className={classname.cover}
                    width={657}
                    height={712}
                />

                <DeliveryBlock className="z-10"/>
            </div>
        </div>
    )
}

export default MainWidget