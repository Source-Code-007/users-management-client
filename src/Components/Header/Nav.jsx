import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='flex justify-between items-center py-4 px-5 lg:px-10 bg-gray-700 text-gray-100'>
            <div>
                <h2 className='font-bold text-slate-50 text-3xl'>Users database</h2>
            </div>
            <ul className='flex justify-between items-center gap-3'>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/about'}>About</Link></li>
                <li><Link to={'/users'}>Users</Link></li>
            </ul>
        </div>
    );
};

export default Nav;