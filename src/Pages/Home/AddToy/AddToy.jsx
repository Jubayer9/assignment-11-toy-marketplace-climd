import React from 'react';
import NavBar from '../../../Share/NavBar';
import Footer from '../../../Share/Footer';
import Swal from 'sweetalert2';
import useTitle from '../../../Hook/UseTitle';
const AddToy = () => {
    useTitle('add toy')
    const handleAddToy = event => {
        event.preventDefault();
        const from = event.target;
        const category = from.category.value;
        const price = from.price.value;
        const photo = from.photo.value;
        const name = from.name.value;
        const user = from.user.value;


        const newToy = {
            category,
            price,
            photo,
            name,
            user
        }
        console.log(newToy);

        // send data to the server
        fetch('https://toy-marketplace-server-beige.vercel.app/addToy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {

                console.log(data);
                if (data.insertedId) {

                    Swal.fire({
                        title: 'Added',
                        text: ' your toy is successfully added 😀😀',
                        icon: 'success',
                        confirmButtonText: 'OK👍'
                    })
                }
            })
    }
    return (
        <div >
            <NavBar></NavBar>

            <form onSubmit={handleAddToy} style={{ width: "70%", margin: "100px auto" }}>
                <div className='text-center mb-10'>
                    <h1 className='text-2xl font-bold text-red-600'> Add your Favorite Toy </h1>
                    <p> Now add your favorite toy and Go play superheros !!! </p>
                </div>
                <div className=" grid gap-6 mb-6 md:grid-cols-2">

                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                        <input type="text" name="user" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required />
                    </div>
                    {/* available Quantity Part */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">available Quantity</label>
                        <input type="text" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="piece" required />
                    </div>

                    {/* Toy category Part*/}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Toy category</label>
                        <input type="text" name="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="category" required />
                    </div>
                    {/* price Part */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Price</label>
                        <input type="text" name="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="$00.0" required />
                    </div>
                    {/* photo add part */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo URL</label>
                        <input type="text" name="photo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="URL" required />
                    </div>


                </div>
                <button className="btn btn-block">ADD TOY</button>
            </form>

            <Footer></Footer>
        </div>
    );
};

export default AddToy;