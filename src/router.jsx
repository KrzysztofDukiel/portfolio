import {createBrowserRouter} from "react-router-dom";
import App from "./App.jsx";


const router = createBrowserRouter([
    {
        element: <App/>,
        path: "/",
    }
]);

export default router;