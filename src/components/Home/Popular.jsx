import React, { use, useState } from 'react';
import { IoMdEye } from 'react-icons/io';
import { MdDelete, MdOutlineEdit } from 'react-icons/md';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
const coffeeResponse = fetch("http://localhost:3000/coffees").then(res => res.json())

const Popular = () => {
    const coffee = use(coffeeResponse);
    const [coffees, setCoffees] = useState(coffee)

    const handleDelete = (id) => {
        console.log(id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to get back!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:3000/coffees/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            const filterCoffee = coffees.filter(coff => coff._id != id)
                            setCoffees(filterCoffee)
                        }
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your coffee has been deleted.",
                            icon: "success"
                        });
                    })
            }
        });

    }
    return (
        <div className='my-24'>
            <div>
                <h3>---slip & Savour---</h3>
                <h2 className='text-xl my-2 text-normal'>Our popular products</h2>
                <button className='btn bg-amber-300'><Link to="/addcoffee">Add Coffee</Link></button>
            </div>
            <div className='grid grid-cols-2 gap-4 mt-6'>
                {
                    coffees.map(coffee => <div key={coffee._id} className="card bg-base-100  shadow-sm hover:shadow-md">
                        <div className='flex items-center justify-around'>
                            <div>
                                <img src={coffee.photo} alt="" />

                            </div>
                            <div>
                                <p>{coffee.name}</p>
                                <p>{coffee.chef}</p>
                                <p>{coffee.taste}</p>
                            </div>
                            <div >
                                <Link to={`/coffees/${coffee._id}`}> <div><IoMdEye size={20} /></div></Link>

                                <Link to={`/coffees/edit/${coffee._id}`}> <div><MdOutlineEdit size={20} /></div></Link>

                                
                                <div><MdDelete onClick={() => handleDelete(coffee._id)} size={20} /></div>
                            </div>
                        </div>
                    </div>)


                }

            </div>

        </div>
    );
};

export default Popular;