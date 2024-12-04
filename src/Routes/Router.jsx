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
import Update from '../Components/Update';
import DetailsPage from '../Pages/DetailsPage';
import Donate from '../Components/Donate';

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
           element:<PrivetRoute><MyCompaign></MyCompaign></PrivetRoute>,
           loader:()=>fetch('http://localhost:5000/addCompaign')
        },
        {
           path:'/myDonation',
           element:<PrivetRoute><MyDonation></MyDonation></PrivetRoute>,
           loader:()=>fetch('http://localhost:5000/user')
        },
        {
          path:'/login',
          element:<Login></Login>
        },{
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/update/:id',
          element:<Update></Update>,
          loader:({params})=>fetch(`http://localhost:5000/addCompaign/${params.id}`)
        },
        {
          path:'/details/:id',
          element:<PrivetRoute><DetailsPage></DetailsPage></PrivetRoute>,
          loader:({params})=>fetch(`http://localhost:5000/addCompaign/${params.id}`)
        },
        {
          path:'/donate',
          element:<Donate></Donate>
        }
      ]
    },
  ]);

export default router
