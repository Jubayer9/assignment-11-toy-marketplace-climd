import {createBrowserRouter,} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Registration from "../Pages/Home/Registration/Registration";
import Login from "../Pages/Home/Login/Login";
import Blog from "../Pages/Blog/Blog";
import AllToy from "../Pages/Home/AllToy/allToy";
import AddToy from "../Pages/Home/AddToy/addToy";
import MyToy from "../Pages/Home/MyToy/myToy";
import NotFound from "../NotFound/NotFound";

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
      {
        path:'/blog',
        element:<Blog></Blog>
      },
      {
        path:'/allToy',
        element:<AllToy></AllToy>
      },
      {
        path:'/myToy',
        element:<MyToy></MyToy>
      },
      {
        path:'/addToy',
        element:<AddToy></AddToy>
      },
      {
        path:'*',
        element: <NotFound></NotFound>
      }
    
  ]);
  export default router;