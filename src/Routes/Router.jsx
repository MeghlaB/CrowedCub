import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import MainLayout from '../MainLayout/MainLayout';
import Home from '../Components/Home';
import Allcompaign from '../Components/Allcompaign';
import AddNewComapaign from '../Components/AddNewComapaign';
import MyCompaign from '../Components/MyCompaign';
import MyDonation from '../Components/MyDonation';
import Login from '../Components/Login';
import Register from '../Components/Register';
import PrivetRoute from '../PrivetRoute/PrivetRoute';
const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
           path:'/allCampaign',
           loader:()=>fetch('http://localhost:5000/addCompaign'),
           element:<Allcompaign></Allcompaign>
        },
        {
           path:'/addCampaign',
           element:<PrivetRoute><AddNewComapaign></AddNewComapaign></PrivetRoute>
        },
        {
           path:'/myCampaign',
           element:<MyCompaign></MyCompaign>
        },
        {
           path:'/myDonation',
           element:<MyDonation></MyDonation>
        },
        {
          path:'/login',
          element:<Login></Login>
        },{
          path:'/register',
          element:<Register></Register>
        }
      ]
    },
  ]);

export default router
