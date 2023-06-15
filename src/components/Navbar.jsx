import React , {useState} from 'react'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const [navbar,setNavbar] = useState(false);

    return (
        <div className='z-30 fixed top-0 left-0 w-full'>
            <div className='relative w-full bg-slate-900'>
                <div className='w-full h-24 max-w-[1100px] mx-auto flex items-center justify-between px-8 text-white'>
                    
                    <a href="/" className='sm:text-4xl text-2xl font-semibold text-red-500'>
                        tMovies
                    </a>

                    <ul className='sm:flex hidden items-center gap-8 font-semibold'>
                        <NavLink to='/' className={({ isActive }) => isActive && 'text-red-500' }>Home</NavLink>
                        <NavLink to='watchlist' className={({ isActive }) => isActive && 'text-red-500'}>Watch List</NavLink>
                        <NavLink to='watched' className={({ isActive }) => isActive && 'text-red-500'}>Watched</NavLink>
                    </ul>

                    <span className='sm:hidden block cursor-pointer' onClick={()=>setNavbar(!navbar)}>
                        {navbar ? (<AiOutlineClose size={23}/>) : (<AiOutlineMenu size={23}/>)}
                    </span>

                    {navbar && (<div onClick={()=>setNavbar(!navbar)} className='bg-black fixed opacity-40 w-full h-screen top-0 left-0'/>)}

                    <ul 
                    className={
                        !navbar ?
                        'z-50 sm:hidden w-[60%] h-screen fixed top-0 right-[-100%] flex bg-slate-900 text-white flex-col items-start pl-10 pt-20 gap-7 font-semibold duration-300'
                        :
                        'z-50 sm:hidden w-[60%] h-screen fixed top-0 right-0 flex bg-slate-900 text-white flex-col items-start pl-10 pt-20 gap-7 font-semibold duration-300'}>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='watchlist'>Watch List</NavLink>
                        <NavLink to='watched'>Watched</NavLink>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Navbar