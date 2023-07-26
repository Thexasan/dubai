import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Customers from "./pages/Customers/Customers";
import Pricing from "./pages/Pricing/Pricing";
import Product from "./pages/Products/Product";
import Resource from "./pages/Resource/Resource";
import Layot from "./Layot/Layot";


const router = createBrowserRouter([
  {
    path:"/",
        element:<Layot />,
        children:[
          {
            index:true,
            element:<Product />
          },
          {
            path:'/customers',
            element:<Customers />
          },
          {
            path:'/pricing',
            element:<Pricing />
          },
          {
            path:'/recource',
            element:<Resource />
          }
        ]
  }
])
function App() {
  return (
 <>
 <RouterProvider router={router} />
 </>
  );
}

export default App;
