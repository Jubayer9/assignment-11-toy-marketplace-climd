import React from 'react';
import Swal from 'sweetalert2';

const MyToyCard = ({ toy }) => {

    const { _id, category, price, photo, name, email } = toy
    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/addToy/${_id}`, {
                    method: 'DELETE'

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your toy has been deleted.',
                                'success'
                            )


                        }
                    })
            }
        })
    }
    return (

        <div className="overflow-x-auto">

            <table className="table w-full mx-auto">
                <tbody>
                    {/* row 1 */}
                    <tr className=''>
                        <th >
                            <label>
                                <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline">
                                    <svg xmlns="http://www.w3.org/2000/svg" className=" w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </label>
                        </th>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={photo} />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">{name}</div>
                                    <div className="text-sm opacity-50">{category}</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            {email}


                        </td>
                        <td>{price}</td>
                        <th>
                            <button className=" btn btn-ghost btn-xs "> Update</button>
                        </th>
                    </tr>

                </tbody>


            </table>
        </div>
    );
};

export default MyToyCard;