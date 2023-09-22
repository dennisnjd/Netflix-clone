import * as React from "react";
import {createBrowserRouter } from "react-router-dom"; 

import MyListPage from "./Pages/MyList/MyList";
import HomePage from "./Pages/Home/Home";


const router = createBrowserRouter([
    { 
      path: "/",
      element: <HomePage/> ,
    },
    {
      path: "/mylist",
      element: <MyListPage/>,
    }
  ]
  );

  export default router;   