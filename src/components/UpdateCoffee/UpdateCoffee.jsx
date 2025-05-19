import React, { useEffect } from 'react';
import { Link, useLoaderData, useParams } from 'react-router';
import Swal from 'sweetalert2';


// const coffeeRes = fetch("http://localhost:3000/coffees").then(res => res.json())




const UpdateCoffee = () => {
    const { id } = useParams()
    // const cof = use(coffeeResponse);

    // const [coffees, setCoffees] = useState(cof)
    useEffect(() => {
        
        fetch("http://localhost:3000/coffees")
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            
        })
    }, []);

    const coffee = useLoaderData()
    const { name, chef, supplier, taste, category, details, photo } = coffee;

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form)
        const data = Object.fromEntries(formData.entries())
        fetch(`http://localhost:3000/coffees/edit/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {


                if (data?.modifiedCount == true) {
                    // setCoffees(cof)
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "updated successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }





    return (
        <div className='p-16 bg-[#F4F3F0] rounded-lg'>
            <button className='btn flex flex-start'><Link to="/">Back to Home</Link></button>
            <div className='w-xl text-center mx-auto'>
                <h2 className='text-xl font-medium '>update Coffee</h2>
                <p className='text-sm font-normal'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>



            <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-2 gap-4'>
                    <div className='fieldset'>
                        <label className="label">Name</label>
                        <input defaultValue={name} type="text" name='name' className="input w-full" placeholder="Enter coffee name" />

                    </div>
                    <div className='fieldset'>
                        <label className="label">Chef</label>
                        <input defaultValue={chef} type="text" name='chef' className="input w-full" placeholder="Enter coffee chef" />

                    </div>
                    <div className='fieldset'>
                        <label className="label">Supplier</label>
                        <input defaultValue={supplier} type="text" name='supplier' className="input w-full" placeholder="Enter coffee supplier" />

                    </div>
                    <div className='fieldset'>
                        <label className="label">Taste</label>
                        <input defaultValue={taste} type="text" name='taste' className="input w-full" placeholder="Enter coffee test" />

                    </div>
                    <div className='fieldset'>
                        <label className="label">Category</label>
                        <input defaultValue={category} type="text" name='category' className="input w-full" placeholder="Enter coffee category" />

                    </div>
                    <div className='fieldset'>
                        <label className="label">Details</label>
                        <input defaultValue={details} type="text" name='details' className="input w-full" placeholder="Enter coffee details" />

                    </div>
                    <div className='fieldset col-span-2'>
                        <label className="label">Photo</label>
                        <input defaultValue={photo} type="text" name='photo' className="input w-full" placeholder="Enter photo url" />

                    </div>
                </div>
                <button type='submit' className="btn btn-neutral mt-4 w-full">Update</button>
            </form>
        </div>

    );
};

export default UpdateCoffee;