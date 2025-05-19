import React from 'react';
import { Link } from 'react-router';

const Popular = () => {
    return (
        <div className='my-24'>
            <div>
                <h3>---slip & Savour---</h3>
                <h2 className='text-xl my-2 text-normal'>Our popular products</h2>
                <button className='btn bg-amber-300'><Link to="/addcoffee">Add Coffee</Link></button>
            </div>
            
        </div>
    );
};

export default Popular;