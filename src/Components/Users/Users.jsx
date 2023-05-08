import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const users = useLoaderData()
    return (
        <div className='min-h-screen bg-gray-200 text-gray-700 py-12'>
            <div className='max-w-7xl mx-6 lg:mx-auto'>
                <h2 className='font-bold text-4xl text-center mb-5'>Users database</h2>
                <div className='grid grid-cols-3 gap-3'>
                    {
                        users.map(user => {
                            return <div key={user._id} className='shadow p-5 bg-slate-100'>
                                <h2>name: {user.name}</h2>
                                <h2>number: {user.number}</h2>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Users;