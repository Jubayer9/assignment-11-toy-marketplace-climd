import { useContext } from "react";
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
    <div className="navbar bg-base-100">
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
        <Link to='/'  className="btn btn-ghost normal-case text-xl"><img style={{width:"70px",borderRadius:"50px"}} src="/public/shopping-bag-superhero-online-shop-bag-shop-super-hero-fashion-web-store_358185-126.jpg" alt="" /></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/allToy'>All toy </Link></li>
          <li><Link to='/myToy'>My Toy </Link></li>
          <li><Link to='/addToy'>Add Toy </Link></li>
          <li><Link to='/blog'>Blog </Link></li>
        </ul>
      </div>
      <div className="navbar-end">
        {user && <h1>
          <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>
        </h1>}
        {user ?
          <button onClick={handleLogOut}> Logout</button> :
          <button><Link to='/login' className="">Login</Link></button>
        }
      </div>
    </div>


  );
}

export default NavBar;