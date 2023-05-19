import { useContext } from "react";
import './NavBar/NavBar.css'
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FaUserCircle } from 'react-icons/fa';



function NavBar() {
  const { user,logOut } = useContext(AuthContext);

const handleLogOut =()=>{
  logOut()
  .then(result => {
    const createdUser = result.user;
    console.log(createdUser);
})
.catch(error => {
    console.log(error);
})
}

  return (
    <div className="navbar bg-primary">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">

            Menu
          </label>
          <ul tabIndex={0} className=" menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/allToy'>All Toy </Link></li>
            <li><Link to='/myToy'>My Toy </Link></li>
            <li><Link to='/addToy'>Add Toy </Link></li>
            <li><Link to='/blog'>Blog </Link></li>
            <li tabIndex={0}>
             

            </li>
          </ul>
        </div>
        <Link to='/'  className="btn gap-7 btn-ghost normal-case text-xl"><img style={{width:"50px",borderRadius:"50px"}} src="/public/shopping-bag-superhero-online-shop-bag-shop-super-hero-fashion-web-store_358185-126.jpg" alt="" />
        <h1 style={{height:"40px",marginTop:"1%",color:"#FF6969" }}>🦸 Here <span style={{color:"#FF6036"}}> Bag 👊</span> </h1>
        </Link>
      </div>
      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/allToy'>All toy </Link></li>
         { user &&
           <li><Link to='/myToy'>My Toy </Link></li>
          }
         { user &&
          <li><Link to='/addToy'>Add Toy </Link></li>
          }
          <li><Link to='/blog'>Blog </Link></li>
        </ul>
      </div>
      <div className="navbar-end">
        {user && 
         <div className="flex ">
          <p  className="text-primary ID">{user?.displayName}</p>
     <p>
     
 <FaUserCircle style={{ fontSize: '2rem',marginRight:"30px" }}> </FaUserCircle>
  
     </p>
         </div>
         }
        {user ?
          <button onClick={handleLogOut}> Logout</button> :
          <button><Link to='/login' className="">Login</Link></button>
        }
      </div>
    </div>


  );
}

export default NavBar;