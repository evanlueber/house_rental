'use client'
import Link from "next/link"

const About = () => {
  return (
    <div>
        <Link className="text-white text-lg py-3 px-4 rounded-full hover:bg-[#1F1F1F] transition cursor-pointer " href="/about">Über uns</Link>
    </div>
  )
}

export default About