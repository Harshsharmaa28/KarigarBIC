'use client'
import Link from "next/link"
export default function Homepage() {
    return (
        <>
        <div className="vsm:max-sm: bg-gradient-to-b from-transparent via-[#D9D9D9] to-[#9cb0f7] w-screen h-screen relative overflow-hidden">
            <div className="vsm:max-sm:">
                <div className="vsm:max-sm:mt-[7rem] vsm:max-sm:mx-3 mt-[10rem]  absolute ml-[7rem]">
                    <h1 className="vsm:max-sm:flex vsm:max-sm:flex-wrap vsm:max-sm: xl:w-[600px] text-[40px] font-extrabold leading-[4rem]">Connecting you with skilled professionals for all your household needs.</h1>
                    <p className="vsm:max-sm:flex vsm:max-sm:flex-wrap opacity-70">One step solution for all your problems</p>
                </div>
                <button className="vsm:max-sm:mx-[4rem] vsm:max-sm:mt-[38rem] absolute bg-gradient-to-b from-[#c960fa] to-[#685de6] w-[11rem] p-2 h-[2.7rem] ml-[7rem] mt-[60vh] rounded-lg text-xl text-white opacity-80">
                <Link href={'/register/registerUser'}>Get Started</Link>
                    </button>
            </div>
            <div className="vsm:max-sm:hidden w-[600px]  absolute ml-[50vw] mt-[17vh]">
                <div>
                    <img src="/images/painterimg.png" className="sm:max-lg:hidden w-[12rem] h-[12rem] bg-contain rounded-tr-[60px] rounded-bl-[60px] ml-[23rem] shadow-right-bottom" />
                </div>
                <div>
                    <img src="/images/tailor.png" className="sm:max-lg:mt-[17vh] w-[12rem] h-[12rem] bg-contain  rounded-tr-[60px] rounded-bl-[60px] ml-[11rem] shadow-right-bottom" />
                </div>
            </div>
        </div>
        </>
    )
}