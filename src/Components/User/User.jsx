import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const User = () => {
    const loadedUser = useLoaderData()

    const updateUserFunc = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const gender = form.gender.value
        const updatedUser = { name, email, gender }

        fetch(`http://localhost:5000/user/${loadedUser._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    toast.info('user modified successfully!', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
            })
            .catch(e => console.log(e.message))
    }

    return (
        <div className="bg-gray-300 text-gray-700 py-12">
            <div className="min-h-screen max-w-7xl mx-6 lg:mx-auto flex justify-center items-center">
                <form onSubmit={updateUserFunc} className="p-4 space-y-3 bg-gray-200 rounded">
                    <input className="block py-2 px-4" type="text" name="name" id="" defaultValue={loadedUser?.name} />
                    <input className="block py-2 px-4" type="email" name="email" id="" defaultValue={loadedUser?.email} />

                    <div className='flex items-center gap-4'>
                        <span className='font-bold text-xl'>Gender</span>
                        <span className='space-x-1'>
                            <input defaultChecked={loadedUser.gender === 'male'? true : false} type="radio" name="gender" value='male' id="male" />
                            <label htmlFor="male">male</label>
                        </span>
                        <span className='space-x-1'>
                            <input defaultChecked={loadedUser.gender === 'female'? true : false} type="radio" name="gender" value='female' id="female" />
                            <label htmlFor="female">female</label>
                        </span>
                    </div>

                    <button type="submit" className='bg-green-500 rounded-lg px-4 py-2 font-bold text-xl text-slate-50'>Update user</button>
                </form>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default User;