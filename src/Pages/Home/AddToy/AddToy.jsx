import React from 'react';
import NavBar from '../../../Share/NavBar';
import Footer from '../../../Share/Footer';

const AddToy = () => {
    const handleAddToy = event => {
        event.preventDefault();
        const form =event.target;
        const category = form.category.value;
        const price = form.price.value;
        const photo = form.photo.value;
        const name = form.name.value;


        

     
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
                        <label for=" Toy Name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Toy Name</label>
                        <input type="text" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required />
                    </div>
                    <div>
                        <label for=" Toy category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Toy category</label>
                        <input type="text" name="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="category" required />
                    </div>
                    <div>
                        <label for=" Price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Price</label>
                        <input type="text" name="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="$00.0" required />
                    </div>
                    <div>
                        <label for="photo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo URL</label>
                        <input type="text" name="photo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="URL" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                    </div>

                </div>
                <button className="btn btn-block">ADD TOY</button>
            </form>

            <Footer></Footer>
        </div>
    );
};

export default AddToy;