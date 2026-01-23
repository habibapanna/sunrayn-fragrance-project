import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main/Main.jsx';
import Home from './Page/Home.jsx';
import Checkout from './Page/Checkout.jsx';
import ProductList from './Page/ProductList.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <h1 className='text-xl lg:text-3xl font-serif font-bold text-red-500'>Page is not found</h1>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "productList",
        element: <ProductList></ProductList>
      },
     
    ]
  },
   {
        path: "checkout",
        element: <Checkout></Checkout>
      },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
