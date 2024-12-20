import { createBrowserRouter } from "react-router-dom";
import Root from "../../Root";
import Home from "../pages/home/Home";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <error></error>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    },
]);


export default router