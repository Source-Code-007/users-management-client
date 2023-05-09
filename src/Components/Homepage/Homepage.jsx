import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Homepage = () => {

    const handleSubmit = e => {
        e.preventDefault()
        const name = e.target.name.value
        const number = e.target.number.value
        const users = { name, number }

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(users)
        }).then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    e.target.reset()
                    toast.success('new user added!', {
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
        <div className=' bg-slate-200'>
            <div className="min-h-screen max-w-7xl justify-center items-center flex flex-col mx-5 lg:mx-auto">
                <h1 className='font-bold text-4xl mb-3'>User managemnet system</h1>
                <form onSubmit={handleSubmit} className='bg-slate-50 shadow-inner w-4/6 lg:w-3/6 rounded-lg p-10 space-y-4'>
                    <input name='name' type="text" className='block p-3 bg-green-200 rounded-lg w-full' placeholder="your name..." />
                    <input name='number' type="email" className='block p-3 bg-green-200 rounded-lg w-full' placeholder="your email..." />
                    <button type="submit" className='rounded-lg px-4 py-2 bg-green-500'>Submit</button>
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

export default Homepage;