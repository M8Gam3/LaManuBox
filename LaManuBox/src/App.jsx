import Template from "./Template";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Template />,
      // errorElement: <div>404</div>,
      children: [
        // {
        //   index: true,
        //   element: < />,
        // },
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