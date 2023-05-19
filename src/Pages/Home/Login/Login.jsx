import { useContext } from "react";
import { Form, Link, } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import NavBar from "../../../Share/NavBar";
import Footer from "../../../Share/Footer";
import { FcGoogle } from "react-icons/fc";

const Login = () => {

    const {signIn,signInWithGoogle } =useContext(AuthContext);

    const handleLogin = event=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value
        const password = form.password.value
        const name = form.password.value
        console.log(email,password,name);
        signIn(email, password)
            .then(result => {
                const LoginUser = result.user;
                console.log(LoginUser);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleGoogleSignIn =()=>{
      signInWithGoogle()
      .then(result=>{
        const loggedUser = result.user;
        console.log(loggedUser)
      })
      .catch(error =>{
        console.log(error);
      })
    }

    return (
        <div>
            <NavBar></NavBar>
           <Form onSubmit={handleLogin}>
            <div className="hero min-h-screen ">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
     
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" name="name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" name="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" />
          <label className="label">
            <p> You don't have an account ? <Link className="text-red-600" to='/registration'>Register</Link></p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
      <div className="flex flex-col w-full border-opacity-50">
 
  <div className="divider">OR</div>
 <button onClick={handleGoogleSignIn} className="grid h-20 card bg-base-300 rounded-box place-items-center  m-6 pb-5"><FcGoogle className="font-bold text-4xl"></FcGoogle>SingIn With Google </button>
</div>
    </div>
    
  </div>
  
</div>

            </Form>
            <Footer></Footer>
        </div>
    );
};

export default Login;