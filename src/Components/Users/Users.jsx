import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const users = useLoaderData()
    return (
        <div className='min-h-screen flex justify-center items-center bg-gray-200 text-gray-700'>
            <div className='grid grid-cols-3 gap-3'>
                {
                    users.map(user => {
                        return <div key={user._id} className='shadow p-5'>
                            <h2>{user.name}</h2>
                            <h2>{user.number}</h2>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default Users;