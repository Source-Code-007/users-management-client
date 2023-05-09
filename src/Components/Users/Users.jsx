import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaInfoCircle, FaTimes } from 'react-icons/fa';

const Users = () => {
    const usersData = useLoaderData()
    const [users, setUsers] = useState(usersData)

    const handleRemoveUserFunc = (id) => {
        fetch(`http://localhost:5000/user/${id}`, {
            method: 'DELETE'
        }).then(res => res.json())
            .then(data => {
                if (data.deletedCount === 1) {
                    const restUser = users.filter(user => user._id !== id)
                    setUsers(restUser)
                    toast.error('user deleted successfully!', {
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
    }

    return (
        <div className='min-h-screen bg-gray-200 text-gray-700 py-12'>
            <div className='max-w-7xl mx-6 lg:mx-auto'>
                <h2 className='font-bold text-4xl text-center mb-5'>Users database</h2>
                <div className='grid grid-cols-1 gap-3'>


                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Gender</th>
                                    <th>Option</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    users && users.map(user => {
                                        const { _id, name, email, gender } = user
                                        return <tr key={_id}>
                                            <td>{_id}</td>
                                            <td className='font-bold text-xl'>{name}</td>
                                            <td>{email}</td>
                                            <td>{gender}</td>
                                            <td><Link to={`/user/${_id}`}><button className='bg-green-500 rounded-lg px-4 py-2 font-bold text-xl text-slate-50 mr-3'><FaInfoCircle></FaInfoCircle></button></Link> <button onClick={() => handleRemoveUserFunc(_id)} className='bg-green-500 rounded-lg px-4 py-2 font-bold text-xl text-slate-50'><FaTimes></FaTimes></button></td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
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

export default Users;