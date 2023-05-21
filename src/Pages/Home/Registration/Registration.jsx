
import { Form, Link,} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import NavBar from "../../../Share/NavBar";
import Footer from "../../../Share/Footer";
import useTitle from "../../../Hook/UseTitle";
const Registration = () => {
  useTitle('Register')
    const { createUser } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photo = form.photo.value;
        console.log(name, email, password, photo);
        createUser(email, password)
            .then(result => {
                const RegisterUser = result.user;
                console.log(RegisterUser);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
<NavBar></NavBar>
            <Form onSubmit={handleRegister}>
            <div className="hero min-h-screen ">
  <div className="hero-content flex-col p">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register Now!!</h1>
      
    </div>
    <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
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
          <input type="email" placeholder="Email" name="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" placeholder="URL" name="photo" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" />
          <label className="label">
            <p>already have an account ? <Link className="text-red-600" to='/login'>Login</Link></p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Registration</button>
        </div>
      </div>
    </div>
  </div>
</div>
            </Form>
            <Footer></Footer>
        </div>
    );
};

export default Registration;