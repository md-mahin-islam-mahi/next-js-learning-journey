import Link from 'next/link';
// import '@/Components/Header/Header.css'

const Header = () => {

    const navLinks = <>
        <Link className='uppercase mx-2 text-[10px] font-semibold' href="/">Home</Link>
        <Link className='uppercase mx-2 text-[10px] font-semibold' href="/about">About Us</Link>
        <Link className='uppercase mx-2 text-[10px] font-semibold' href="/projects">Our Projects</Link>
        <Link className='uppercase mx-2 text-[10px] font-semibold' href="/goals">Our Goals</Link>
    </>

    return (
        <nav className='fixed w-full shadow-sm'>
            <div className='flex justify-center items-center py-3'>
                {navLinks}
            </div>
        </nav>
    );
};

export default Header;