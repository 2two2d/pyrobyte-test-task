import {ReactElement} from "react";
import Header from "@widgets/Layout/Header";
import Footer from "@widgets/Layout/Footer";
import {Outlet} from "react-router-dom";

const Layout = (): ReactElement => {
    return (
        <>
            <Header/>

            <Outlet/>

            <Footer/>
        </>
    )
}

export default Layout