import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { Provider } from "react-redux";
import './index.css'
import App from './App.jsx'
import UserRoot from './roots/UserRoot';
import AdminRoot from './roots/AdminRoot'
import Home from './components/Home';
import LoginPage from './components/Partner';
// import Categories from './components/MealsList';
import MealsList from './components/MealsList';
import Food from './components/Food';
import CareersPage from './components/CareerPage';
import CheckoutPage from './components/CheckoutPage';
import  store  from './redux/Store';

const router= createBrowserRouter([
  {
   path:'/',
   element:<UserRoot/>,
   children:[
    {
      path:'/',
      element:<Home/>
    },{
      path:'/meals/:category',
      element:<MealsList/>
    },
    {
      path:'/meal/:id',
      element:<Food/>
    },
    {
      path:'/checkout',
      element:<CheckoutPage/>
    }
    

   ]
  },
  {
    path:'/admin',
    element:<AdminRoot/>,
    children:[
     {
       path:'/admin',
       element:<LoginPage/>
     },
     {
      path:'career',
      element:<CareersPage/>
     }
    ]
   }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
