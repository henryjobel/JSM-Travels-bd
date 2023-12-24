import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Service from "../Pages/Service/Service";
import Aboutus from "../Pages/Aboutus/Aboutus";
import Contactus from "../Pages/ContactUS/Contactus";
import ServiceDetails from "../Pages/ServiceDtls/ServiceDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout></Layout>,
      children:([
        {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/service",
        element:<Service></Service>
      },
      {
        path:"/aboutus",
        element:<Aboutus></Aboutus>
      },
      {
        path:"/contactus",
        element:<Contactus></Contactus>
      },
      {
        path:"/details/:id",
        element:<ServiceDetails></ServiceDetails>,
        loader:()=> fetch('/fakedata.json')
      }
    ])
    },
  ]);

  export default router;