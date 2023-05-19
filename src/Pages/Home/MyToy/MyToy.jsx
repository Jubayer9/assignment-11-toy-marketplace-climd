import React from 'react';
import NavBar from '../../../Share/NavBar';
import Footer from '../../../Share/Footer';
import { useLoaderData } from 'react-router-dom';


const MyToy = () => {
    const toys =useLoaderData();
    return (
        <div>
                        <NavBar></NavBar>
            <h1>toy ase {toys.length}</h1>
            <Footer></Footer>
        </div>
    );
};

export default MyToy;