import React from 'react';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;