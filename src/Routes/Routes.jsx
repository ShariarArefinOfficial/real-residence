import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Root/Root";
//import Slider from "../SharedComponent/Slider/Slider";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/signin',
          element:<SignIn></SignIn>,
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>,
        }
       
      ]
    },
    
  ]);

  export default router;