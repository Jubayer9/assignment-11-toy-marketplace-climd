import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NavBar from '../../Share/NavBar';
import Footer from '../../Share/Footer';
import Swal from 'sweetalert2';

const UpdateToy = () => {
    const toy = useLoaderData();
    const { _id, category, price, photo, name } = toy

    const handleUpdateToy = event => {
        event.preventDefault();
        const from = event.target;
        const category = from.category.value;
        const price = from.price.value;
        const photo = from.photo.value;
        const name = from.name.value;


        const UpdatedToy = {
            category,
            price,
            photo,
            name
        }
        console.log(UpdatedToy);

        // send data to the server
        fetch(`http://localhost:5000/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdatedToy)
        })
            .then(res => res.json())
            .then(data => {

                console.log(data);
                if (data.modifiedCount > 0) {

                    Swal.fire({
                        title: 'Update',
                        text: ' Now update your favorite toy 😀😀',
                        icon: 'success',
                        confirmButtonText: 'OK👍'
                    })
                }
            })
    }

    return (
        <div >
            <NavBar></NavBar>

            <form onSubmit={handleUpdateToy} style={{ width: "70%", margin: "100px auto" }}>
                <div className='text-center mb-10'>
                    <h1 className='text-2xl font-bold text-red-600'> Update your Favorite Toy </h1>
                </div>
                <div className=" grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Toy Name</label>
                        <input type="text" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={name} placeholder="Name" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Toy category</label>
                        <input type="text" name="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={category} placeholder="category" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Price</label>
                        <input type="text" name="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={price} placeholder="$00.0" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo URL</label>
                        <input type="text" name="photo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={photo} placeholder="URL" required />
                    </div>
             

                </div>
                <button className="btn btn-block">Update Now</button>
            </form>

            <Footer></Footer>
        </div>
    );
};

export default UpdateToy;