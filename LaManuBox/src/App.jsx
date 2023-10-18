import Template from "./Template";
import Home from "./pages/Home";
import Login from "./pages/Login";
// import Product from "./pages/Product";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Template />,
      // errorElement: <div>404</div>,
      children: [
        {
          index: true,
          element: <Home />,
        },
        // {
        //   path: '',
        //   element: < />,
        // },
      ]
    }
  ]
)
function App() {

  return <RouterProvider router={router} />
}
export default App;