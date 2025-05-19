import React from 'react';
import heroImg from '../../../images/more/3.png'

const Hero = () => {
    return (
        <div className='relative group'>
            <div className='py-72 pl-96 bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url(${heroImg})` }}>
                <div className='text-center'>
                    <h2 className='text-3xl text-white'>Would you like a Cup of Delicious Coffee?</h2>
                    <p className='text-white text-xs px-36 my-8'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                    <button className='btn bg-amber-200 '>Learn More</button>
                </div>

            </div>
            <div className="overly hidden group-hover:block bg-[rgba(0,0,0,0.16)] absolute top-0 left-0 w-full h-full"></div>
        </div>
    );
};

export default Hero;