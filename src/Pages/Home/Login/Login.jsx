import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
           <form  className="border bg-black h-96 border-black p-5" style={{margin:"60px 400px", padding:"100px ",height:"600px"}}>
            <h1 className="text-center text-5xl">Login</h1>
    <div className="mb-5  ">
        <label  className=" mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required/>
    </div> 
    <div className="mb-6">
        <label  className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
        <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required/>
    </div> 
   <p>Do you Have an Account ? <Link className="text-red-600" to={'/registration'}> Register </Link></p>
   
   <div>
<button className="btn btn-success mt-9"> Login</button>
   </div>
    
</form>
        </div>
    );
};

export default Login;