import React from 'react';
import bg from '../../../images/icons/bg.png';

const Header = () => {
    return (
        <div className='flex  bg-center bg-cover p-2' style={{backgroundImage:`url(${bg})`}}>
            <h3 className='mx-auto flex gap-2 text-white italic'> <img className='w-4 h-4' src="/images/more/logo1.png" alt="" />Espresso Emporium</h3>
        </div>
    );
};

export default Header;