import {createBrowserRouter} from "react-router-dom";
import MainPage from "@pages/main";
import Layout from "@widgets/Layout";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <MainPage/>
            }
        ]
    }
]);