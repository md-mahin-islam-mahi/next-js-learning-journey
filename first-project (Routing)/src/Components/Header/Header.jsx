import Link from 'next/link';

const Header = () => {

    return (
        <nav className='flex justify-center'>
            <Link className='' href="/">Home</Link>
            <Link className='' href="/about">About Us</Link>
            <Link className='' href="/projects">Our Projects</Link>
            <Link className='' href="/goals">Our Goals</Link>
        </nav>
    );
};

export default Header;