import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Root/Root";
import Slider from "../SharedComponent/Slider/Slider";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
       
      ]
    },
    
  ]);

  export default router;