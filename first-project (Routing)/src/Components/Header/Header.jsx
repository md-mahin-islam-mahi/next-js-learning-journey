import Link from 'next/link';
// import '@/Components/Header/Header.css'

const Header = () => {

    return (
        <nav className='fixed w-full shadow-xl'>
            <div className='flex justify-center items-center py-3'>
                <Link className='uppercase mx-2 text-2xl font-semibold' href="/">Home</Link>
                <Link className='uppercase mx-2 text-2xl font-semibold' href="/about">About Us</Link>
                <Link className='uppercase mx-2 text-2xl font-semibold' href="/projects">Our Projects</Link>
                <Link className='uppercase mx-2 text-2xl font-semibold' href="/goals">Our Goals</Link>
            </div>
        </nav>
    );
};

export default Header;