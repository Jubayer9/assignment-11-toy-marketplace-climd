import React from 'react';
import NavBar from '../../../Share/NavBar';
import Footer from '../../../Share/Footer';
import { useLoaderData } from 'react-router-dom';
import MyToyCard from './MyToyCard';


const MyToy = () => {
    const toys = useLoaderData();
    return (
        <div>
            <NavBar></NavBar>
       

            {
                toys.map(toy => <MyToyCard
                    key={toy._id}
                    toy={toy}

                >



                </MyToyCard>)
            }
            <Footer></Footer>
        </div>
    );
};

export default MyToy;