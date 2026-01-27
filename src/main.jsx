import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main/Main.jsx';
import Home from './Page/Home.jsx';
import Checkout from './Page/Checkout.jsx';
import ProductList from './Page/ProductList.jsx';
import Contact from './Page/Contact.jsx';
import Faq from './Page/Faq.jsx';
import About from './Page/About.jsx';
import Terms from './components/Terms.jsx';
import BLogPage from './Page/BLogPage.jsx';
import BlogDetails from './Page/BlogDetails.jsx';
import ProductDetails from './Page/ProductDetails.jsx';
import HolidayOffer from './Page/HolidayOffer.jsx';

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
      {
        path: "/productList/:slug",
        element: <ProductDetails></ProductDetails>
      },
      {
        path: "contact",
        element: <Contact></Contact>
      },
      {
        path: "faq",
        element: <Faq></Faq>
      },
      {
        path: "about",
        element: <About></About>
      },
      {
        path: "terms",
        element: <Terms></Terms>
      },
      {
        path: "blogs",
        element: <BLogPage></BLogPage>
      },
      {
        path: "/blogs/:slug",
        element: <BlogDetails></BlogDetails>
      },
      {
        path: "holidayOffer",
        element: <HolidayOffer></HolidayOffer>
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
