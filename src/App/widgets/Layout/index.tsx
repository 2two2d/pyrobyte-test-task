import {ReactElement} from "react";
import Header from "@widgets/Layout/Header";
import Footer from "@widgets/Layout/Footer";
import {Outlet} from "react-router-dom";

const Layout = (): ReactElement => {
    return (
        <div className="w-full flex flex-col">
            <Header/>

            <Outlet/>

            <Footer/>
        </div>
    )
}

export default Layout