import React from 'react';

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <div className='flex justify-center'>
            <p className='text-[10px] font-light'>Copyright by Mahin @{date}</p>
        </div>
    );
};

export default Footer;