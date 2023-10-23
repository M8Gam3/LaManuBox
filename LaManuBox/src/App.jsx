import React from "react";
import Template from "./Template";
import Home from "./pages/Home";
import Login from "./pages/Login.jsx";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Product from "./pages/Product";
import Register from "./pages/Register";

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Template />,
      errorElement: <div>404</div>,
      children: [
          {
            index: true,
            element: < Home/>,
          },
          {
            path: '/Product',
            element: < Product/>,
          }, 
          {
              path: '/Login',
              element: < Login/>,
          },
          {
            path : '/Register',
            element : <Register/>
          }
      ]
    }
  ]
)
function App() {

  return <RouterProvider router={router} />
}
export default App;