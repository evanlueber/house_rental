'use client'
import Image from 'next/image'

const Logo = () => {
    return (
        <div className='hidden md:flex md:flex-row justify-center items-center cursor-pointer'>
        <Image
            alt="Logo"
            height='50'
            width='50'
            src={'/img/logo.png'}
            className="hidden md:block"
        />
        <p className=' text-sm font-bold text-white text-center hidden md:block'>HOUSE <br /> RENTAL</p>
        </div>
    )
}

export default Logo