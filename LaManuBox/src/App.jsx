import React from "react";
import Template from "./Template";
import Home from "./pages/Home";
import Login from "./pages/Login";
// import Product from "./pages/Product";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./pages/Home";
import Product from "./pages/Product";
import Login from "./pages/Login";

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
      ]
    }
  ]
)
function App() {

  return <RouterProvider router={router} />
}
export default App;