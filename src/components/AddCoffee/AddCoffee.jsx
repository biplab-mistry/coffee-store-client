import React from 'react';

const AddCoffee = () => {
    return (
        <div className='p-16 bg-[#F4F3F0] rounded-lg'>
            <div className='w-xl text-center mx-auto'>
                <h2 className='text-xl font-medium '>Add New Coffee</h2>
                <p className='text-sm font-normal'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <div className="">

                <div className="card-body">
                    <form>
                        <div className='grid grid-cols-2 gap-4'>
                            <div className='fieldset'>
                                <label className="label">Name</label>
                                <input type="text" className="input w-full" placeholder="Enter coffee name" />

                            </div>
                            <div className='fieldset'>
                                <label className="label">Chef</label>
                                <input type="text" className="input w-full" placeholder="Enter coffee chef" />

                            </div>
                            <div className='fieldset'>
                                <label className="label">Supplier</label>
                                <input type="text" className="input w-full" placeholder="Enter coffee supplier" />

                            </div>
                            <div className='fieldset'>
                                <label className="label">Taste</label>
                                <input type="text" className="input w-full" placeholder="Enter coffee test" />

                            </div>
                            <div className='fieldset'>
                                <label className="label">Category</label>
                                <input type="text" className="input w-full" placeholder="Enter coffee category" />

                            </div>
                            <div className='fieldset'>
                                <label className="label">Details</label>
                                <input type="text" className="input w-full" placeholder="Enter coffee details" />

                            </div>
                            <div className='fieldset col-span-2'>
                                <label className="label">Photo</label>
                                <input type="text" className="input w-full" placeholder="Enter photo url" />

                            </div>
                        </div>
                        <button className="btn btn-neutral mt-4 w-full">Add Coffee</button>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default AddCoffee;