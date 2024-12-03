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
           element:<Allcompaign></Allcompaign>
        },
        {
           path:'/addCampaign',
           element:<AddNewComapaign></AddNewComapaign>
        },
        {
           path:'/myCampaign',
           element:<MyCompaign></MyCompaign>
        },
        {
           path:'/myDonation',
           element:<MyDonation></MyDonation>
        },
      ]
    },
  ]);

export default router
