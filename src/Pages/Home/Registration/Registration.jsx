
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
const Registration = () => {
    const {createUser} = useContext(AuthContext);

    const handleRegister =event=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password= form.password.value;
        const first_name= form.first_name.value;
        const last_name= form.last_name.value;
        const photo= form.photo.value;
        const confirm_password= form.confirm_password.value;
console.log(first_name,last_name,email,password,confirm_password,photo);
createUser(email,password)
.then(result=>{
    const createdUser = result.user;
    console.log(createdUser);
})
.catch(error =>{
    console.log(error);
})
    }

    return (
        <div>
            
<form onSubmit={handleRegister} className=" bg-black " style={{margin:"50px 400px", padding:"50px ",height:"710px"}}>
<h1 className="text-center text-4xl pb-9"> Register now </h1> <hr />
    <div className="grid gap-6 mb-6 md:grid-cols-2 mt-3 ">
        <div>
            <label  className="block mb-2  text-sm font-medium text-gray-900 dark:text-white">First name</label>
            <input type="text" name="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="First name" required/>
        </div>
        <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
            <input type="text" name="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Last name" required/>
        </div>
      

        <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo URL</label>
            <input type="text" name="photo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="URL" required/>
        </div>
        
    </div>
    <div className="mb-6">
        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
        <input type="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required/>
    </div> 
    <div className="mb-6">
        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
        <input type="password" name="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" required/>
    </div> 
    <div className="mb-6">
        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
        <input type="password" name="confirm_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" required/>
    </div> 
   <div>
    <p> Already have an account? <Link className="text-red-600" to={'/login'}>Login</Link></p>
   </div>
    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Register </button>
</form>

        </div>
    );
};

export default Registration;