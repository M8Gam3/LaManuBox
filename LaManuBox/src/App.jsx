import React from "react";
import Template from "./Template";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./pages/Home.jsx";
import Product from "./pages/Product.jsx";
import Login from "./pages/Login.jsx";

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Template />,
      errorElement: <div>404</div>,
      children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: '/Product',
            element: < Product/>,
          }, 
          {
              path: '/Login',
              element: < Login/>,
          },
      ]
    }
  ]
)
function App() {

  return <RouterProvider router={router} />
}
export default App;