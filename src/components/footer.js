

export default function Footer() {
    return (
        <div className='flex justify-between mt-2 mx-10'>
            <div className='vsm:max-sm:hidden flex gap-3 text-sm'>
                <div className=' mt-1'>
                    <img src="/copy.png" className='w-[.75rem]' />
                </div>
                <div>
                    <p>2023 Karigar</p>
                </div>
                <div className='bg-black w-[.75px] h-6 mt-.75'></div>
                <div><p>Privacy</p></div>
                <div className='bg-black w-[.75px] h-6 mt-.75'></div>
                <div><p>Terms</p></div>
                <div className='bg-black w-[.75px] h-6 mt-.75'></div>
                <div><p>Company detail</p></div>
                <div className='bg-black w-[.75px] h-6 mt-.75'></div>
                <div><p>About us</p></div>
            </div>
            <div className='vsm:max-sm:gap-2 vsm:max-sm: flex xl:mr-5 gap-4'>
                <div className="vsm:max-sm:opacity-1">
                    <p className="vsm:max-sm:">Karigar</p>
                </div>
                <div>
                    <img src="images/globe.jpg" className='vsm:max-sm:ml-5 w-[15px] [15px] mt-1' />
                </div>
                <div><p>English(IN)</p></div>
                <div>
                    <img src="images/fb.png" className='w-[30px] h-[30px] mb-3' />
                </div>
                <div>
                    <img src="images/insta.png" className='w-[30px] h-[30px]' />
                </div>
                <div>
                    <img src="images/linkedin.png" className='w-[22px] h-[22px] mt-1' />
                </div>
            </div>
        </div>
    )
}