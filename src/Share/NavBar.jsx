import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link>Home</Link></li>
        <li><Link>All Toy </Link></li>
        <li><Link>My Toy </Link></li>
        <li><Link>Add Toy </Link></li>
        <li><Link>Blog </Link></li>
        <li tabIndex={0}>
          <Link to='' className="justify-between">
            Parent
            
          </Link>
         
        </li>
        <li><Link>Item3</Link></li>
      </ul>
    </div>
    <Link to='' className="btn btn-ghost normal-case text-xl">daisyUI</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link>Home</Link></li>
      <li><Link>All toy </Link></li>
      <li><Link>My Toy </Link></li>
      <li><Link>Add Toy </Link></li>
      <li><Link>Blog </Link></li>
      <li tabIndex={0}>
        <Link>
          Parent
          
        </Link>
        
      </li>
      <li><Link>Item 3</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <Link to='' className="">Get started</Link>
  </div>
</div>

      
    );
};

export default NavBar;