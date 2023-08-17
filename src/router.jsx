import {createBrowserRouter} from "react-router-dom";
import App from "./App.jsx";
import Register from "./components/loginAndRegister/register.jsx";



const router = createBrowserRouter([
    {
        element: <App/>,
        path: "/",
    }, {
    element: <Register/>,
        path: "/rejestracja"
    }
]);

export default router;