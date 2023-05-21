import React from 'react';
import NavBar from '../../../Share/NavBar';
import Footer from '../../../Share/Footer';
import useTitle from '../../../Hook/UseTitle';
const AllToy = () => {
    useTitle('All toy')
    return (
        <div>
         <NavBar></NavBar>
            <h1>ALL toy</h1>
            <Footer></Footer>
        </div>
    );
};

export default AllToy;