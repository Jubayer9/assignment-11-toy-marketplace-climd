import { createBrowserRouter, } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Registration from "../Pages/Home/Registration/Registration";
import Login from "../Pages/Home/Login/Login";
import Blog from "../Pages/Blog/Blog";
import AllToy from "../Pages/Home/AllToy/allToy";
import AddToy from "../Pages/Home/AddToy/AddToy";
import MyToy from "../Pages/Home/MyToy/myToy";
import NotFound from "../NotFound/NotFound";
import UpdateToy from "../Pages/UpdateToy/UpdateToy";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import ViewDetails from "../Pages/Home/Details/ViewDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },


    ]
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/registration',
    element: <Registration></Registration>
  },
  {
    path: '/blog',
    element: <Blog></Blog>
  },
  {
    path: '/allToy',
    element: <PrivateRoute><AllToy></AllToy></PrivateRoute>
  },
  {
    path: '/myToy',
    element: <MyToy></MyToy>,
    loader:()=> fetch('http://localhost:5000/addToy')
   
  },
  {
    path: '/addToy',
    element: <AddToy></AddToy>
  },
  {
    path: '*',
    element: <NotFound></NotFound>
  },
  {
    path:'/:id',
    element: <UpdateToy></UpdateToy>,
    loader: ({params})=> fetch(`http://localhost:5000/addToy/${params.id}`)
  },
  {
    path:'/details',
    element:<PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>
  }

]);
export default router;