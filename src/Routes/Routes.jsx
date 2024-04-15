import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Root/Root";
//import Slider from "../SharedComponent/Slider/Slider";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
//import Slider from "../SharedComponent/Slider/Slider";
import AllProperties from "../Pages/AllPropeties/AllProperties";
import Property from "../SharedComponent/Property/Property";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch('propertyDetails.json')
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
          loader:()=>fetch('propertyDetails.json')
        },
        {
          path:'/property/:id',
          element:<Property></Property>
        }

       
      ]
    },
    
  ]);

  export default router;