import React from 'react';
import { Link, useLoaderData, } from 'react-router';

const CoffeeCard = () => {
    const data = useLoaderData()
    const {name,chef,taste,photo,category,details}=data;
    return (
        <div className='mt-12'>
            <div>
                    <button className='btn text-left flex my-4'><Link to="/">Home</Link></button>
                <div  className="card bg-base-100  shadow-sm hover:shadow-md">
                    <div className='flex items-center justify-around'>
                        <div>
                            <img src={photo} alt="" />

                        </div>
                        <div>
                            <p>{name}</p>
                            <p>{chef}</p>
                            <p>{taste}</p>
                            <p>{category}</p>
                            <p>{details}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;