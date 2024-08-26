import React from 'react'

interface NavbarItemProps {
    label: string;
}

export const NavbarItems = ({ label }: NavbarItemProps) => {
    return (
        <div className='text-white cursor-pointer hover:text-gray-300 transition'>Home</div>
    )
}
