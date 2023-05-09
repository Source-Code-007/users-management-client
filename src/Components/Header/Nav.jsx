import { Link } from "react-router-dom";

const Nav = () => {
    return (

        <div className="navbar bg-base-100 justify-between">
            <div className="navbar-start">
                <Link to={'/'}><h2 className='font-bold text-gray-700 text-3xl'>Users database</h2></Link>
            </div>

            <div className="hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link className="text-lg px-3 py-2 font-bold" to={'/'}>home</Link></li>
                    <li><Link className="text-lg px-3 py-2 font-bold">services</Link></li>
                    <li><Link className="text-lg px-3 py-2 font-bold" to={'users'}>users</Link></li>
                </ul>
            </div>
            <div className="dropdown mr-44">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link className="text-lg px-3 py-2 font-bold" to={'/'}>home</Link></li>
                    <li><Link className="text-lg px-3 py-2 font-bold">services</Link></li>
                    <li><Link className="text-lg px-3 py-2 font-bold" to={'users'}>users</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Nav;