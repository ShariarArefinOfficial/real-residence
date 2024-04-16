import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Root/Root";
//import Slider from "../SharedComponent/Slider/Slider";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
//import Slider from "../SharedComponent/Slider/Slider";
import AllProperties from "../Pages/AllPropeties/AllProperties";
import Property from "../SharedComponent/Property/Property";
import PrivateRoutes from "./PrivateRoutes";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import NotFound from "../SharedComponent/NotFound/NotFound";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Profile from "../Pages/Profile/Profile";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<NotFound></NotFound>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch('/propertyDetails.json')
        },
        {
          path:'/signin',
          element:<SignIn></SignIn>,
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>,
        },
        {
          path:'/allProperties',
          element:<AllProperties></AllProperties>,
          loader:()=>fetch('/propertyDetails.json')
        },
        {
          path:'/property/:id',
          element:<PrivateRoutes><Property></Property></PrivateRoutes>,
          loader:()=>fetch('/propertyDetails.json')
        },
        {
          path:'/updateProfile',
          element:<UpdateProfile></UpdateProfile>
        },
        {
          path:'/contactUS',
          element:<ContactUs></ContactUs>,
        },
        {
          path:'/myprofile',
          element:<Profile></Profile>,
        }


       
      ]
    },
    
  ]);

  export default router;