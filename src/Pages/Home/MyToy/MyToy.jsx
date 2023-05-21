import React, { useEffect, useState } from 'react';
import NavBar from '../../../Share/NavBar';
import Footer from '../../../Share/Footer';
import { useLoaderData } from 'react-router-dom';
import MyToyCard from './MyToyCard';
import useTitle from '../../../Hook/UseTitle';


const MyToy = () => {
    useTitle('My toy')
    const loadedToys = useLoaderData();
    const [Toys, setToys] = useState(loadedToys)
    const [totalToys, setTotalToys] = useState()
    const [itemsPerPage, setItemsPerPage] = useState(10)
    const [currentPage, setCurrentPage] = useState(0)


    useEffect(() => {
        fetch('https://toy-marketplace-server-beige.vercel.app/totalToys')
            .then(res => res.json())
            .then(data => setTotalToys(data))
    }, [])


    const totalPages = Math.ceil(totalToys?.result) || 1


    const pageNumbers = [...Array(totalPages).keys()];

    const option = [5, 10, 20]


function handleSelectChange(event){
    setItemsPerPage(parseInt(event.target.value));
    setCurrentPage(0)
}


    return (
        <div>
            <NavBar></NavBar>

            {
                Toys.map(toy => <MyToyCard
                    key={toy._id}
                    toy={toy}
                    Toys={Toys}
                    setToys={setToys}
                    totalToys={totalToys}
                    setTotalToys={setTotalToys}
                >



                </MyToyCard>)
            }
            <hr />
            {/* pagination */}
            <div className='text-center m-10'>
                <p>{itemsPerPage}</p>
                {
                    pageNumbers.map(number => <button className='btn ml-8'
                        key={number}
                        onClick={() => setCurrentPage(number)}
                    >{number}</button>)
                }
                <select value={itemsPerPage} onChange={handleSelectChange}>
                    {
                        option.map(option => (
                            <option key={option} value={option}>

                            {option}
                            </option>
                        ))}
                </select>
            </div>
            <hr />
            <Footer></Footer>
        </div>
    );
};

export default MyToy;