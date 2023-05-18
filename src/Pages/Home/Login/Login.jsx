import { useContext } from "react";
import { Form, } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Login = () => {

    const {signIn } =useContext(AuthContext);

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


    return (
        <div>
           <Form onSubmit={handleLogin}>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="email" name="name" className="input input-bordered" />
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
          <input type="text" placeholder="password" name="password" className="input input-bordered" />
          <label className="label">
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  </div>
</div>
            </Form>
        </div>
    );
};

export default Login;