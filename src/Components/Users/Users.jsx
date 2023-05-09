import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

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
                    console.log('delete successfully')
                }
            })
    }

    return (
        <div className='min-h-screen bg-gray-200 text-gray-700 py-12'>
            <div className='max-w-7xl mx-6 lg:mx-auto'>
                <h2 className='font-bold text-4xl text-center mb-5'>Users database</h2>
                <div className='grid grid-cols-3 gap-3'>
                    {
                        users && users.map(user => {
                            const {_id, name, number} = user || {}
                            return <div key={_id} className='shadow p-5 rounded bg-slate-100 text-lg space-y-2'>
                                <h2>name: {name}</h2>
                                <h2>number: {number}</h2>
                                <Link to={`/user/${_id}`}><button className='bg-green-500 rounded-lg px-4 py-2 font-bold text-xl text-slate-50 mr-3'>Update user</button></Link>
                                <button onClick={() => handleRemoveUserFunc(_id)} className='bg-green-500 rounded-lg px-4 py-2 font-bold text-xl text-slate-50'>Remove user</button>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Users;