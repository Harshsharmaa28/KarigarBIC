'use client'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import { BiSolidUser } from "react-icons/bi";
import { RiLockPasswordFill } from "react-icons/ri";
import Link from 'next/link';
export default function Navbar() {
    function getlogin() {
        return (
            <Link href="/login">
                <a>Login</a>
            </Link>
        )
    }
    return (
        <div className='vsm:max-sm:flex flex justify-between h-[50px] mx-[4rem]'>
            <div className='vsm:max-sm:-ml-10 text-xl font-extrabold mt-2'>
                <h1 className=' font-black font-serif hover:cursor-pointer'>KARIGAR</h1>
            </div>
            <div className='vsm:max-sm:hidden flex gap-10 mt-3 opacity-70'>
                <p className="hover:cursor-pointer vsm:max-lg:hidden">For you</p>
                <p className="hover:cursor-pointer">Discover</p>
                <p className="hover:cursor-pointer">Hire</p>
                <p className="hover:cursor-pointer">Assests</p>
                <p className="hover:cursor-pointer">Jobs</p>
            </div>
            <div className='vsm:max-sm:-mr-12 vsm:max-sm:h-8 vsm:max-sm:text-lg vsm:max-sm:font-extrabold flex gap-4 mt-2'>
                <div className='vsm:max-sm: flex justify-between h-8 gap-6 font-bold text-white'>
                    <img src="bell.svg" alt="" className='vsm:max-sm:hidden h-6 mt-1 mr-4'/>
                    <button  className='vsm:max-sm:w-[5rem] bg-white bg-opacity-20  text-black border-2 border-black hover:shadow-xl hover:bg-gray-100 rounded-2xl w-[6vw]'>
                       <Link href={'/login'}>Login</Link>
                    </button>

                    <button className='vsm:max-sm:hidden vsm:max-sm:text-sm w-[7vw] bg-black hover:shadow-xl hover:bg-slate-800 rounded-2xl p-1'>
                    <Link href={'/register/registerUser'}>Register</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}