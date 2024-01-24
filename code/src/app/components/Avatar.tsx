'use client'
import Image from 'next/image'

const Avatar = () => {
  return (
    <div>
        <Image
            className=' rounded-full'
            alt="Avatar"
            height='30'
            width='30'
            src={'/img/avatar.jpg'}
        />
    </div>
  )
}

export default Avatar