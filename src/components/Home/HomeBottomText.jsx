import React from 'react'
import { Link } from 'react-router-dom'

export default function HomeBottomText() {
  return (
    <div className='font-[font2] flex items-center justify-center gap-2'>
        <Link to={"/projects"} className='text-[6.5vw] border-5 py-1 leading-[7vw]  text-white border-white rounded-full px-10 uppercase hover:border-[#d3fd50] hover:text-[#d3fd50]'>Projects</Link>
        <Link to={"/agence"} className='text-[6.5vw] border-5 py-1 leading-[7vw]  text-white border-white rounded-full px-10 uppercase hover:border-[#d3fd50] hover:text-[#d3fd50]'>Agence</Link>
    </div>
  )
}
