import React, { useState } from 'react';
import NavBar from '../../../Share/NavBar';
import Footer from '../../../Share/Footer';
import { useLoaderData } from 'react-router-dom';
import MyToyCard from './MyToyCard';
import useTitle from '../../../Hook/UseTitle';


const MyToy = () => {
    useTitle('My toy')
    const loadedToys = useLoaderData();
    const [Toys,setToys] =useState(loadedToys)
    return (
        <div>
            <NavBar></NavBar>
       

            {
                Toys.map(toy => <MyToyCard
                    key={toy._id}
                    toy={toy}
                    Toys={Toys}
                    setToys={setToys}
                >



                </MyToyCard>)
            }
            <Footer></Footer>
        </div>
    );
};

export default MyToy;