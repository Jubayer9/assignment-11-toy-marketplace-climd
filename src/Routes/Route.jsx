import {createBrowserRouter,} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Registration from "../Pages/Home/Registration/Registration";
import Login from "../Pages/Home/Login/Login";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path:'/',
            element:<Home></Home>
        },
      
      ]
    },
    {
      path:'/login',
      element:<Login></Login>
  },
  {
      path:'/registration',
      element:<Registration></Registration>
  },
  ]);
  export default router;