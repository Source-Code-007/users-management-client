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
            .then(data => console.log(data))
            .catch(e => console.log(e.message))
    }

    return (
        <div className='min-h-screen flex flex-col justify-center items-center'>
            <h1 className='font-bold text-4xl mb-3'>User managemnet system</h1>
            <form onSubmit={handleSubmit} className='bg-slate-200 p-5 rounded-lg space-y-4'>
                <input name='name' type="text" className='block p-3 bg-green-200 rounded-lg' placeholder="your name..." />
                <input name='number' type="numer" className='block p-3 bg-green-200 rounded-lg' placeholder="your email..." />
                <button type="submit" className='rounded-lg px-4 py-2 bg-green-500'>Submit</button>
            </form>
        </div>
    );
};

export default Homepage;