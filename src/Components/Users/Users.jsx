import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const users = useLoaderData()
    const handleRemoveUserFunc = (id) => {
        fetch(`http://localhost:5000/user/${id}`, {
            method: 'DELETE'
        }).then(res => res.json())
            .then(data => {
                if (data.deletedCount === 1) {
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
                            return <div key={user._id} className='shadow p-5 rounded bg-slate-100 text-lg space-y-2'>
                                <h2>name: {user.name}</h2>
                                <h2>number: {user.number}</h2>
                                <button onClick={() => handleRemoveUserFunc(user._id)} className='bg-green-500 rounded-lg px-4 py-2 font-bold text-xl text-slate-50'>Remove user</button>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Users;