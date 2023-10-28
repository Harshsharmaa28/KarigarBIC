import Link from 'next/link'

export default function Topservice() {
    return (
        <div className=" overflow-hidden flex flex-col gap-12 w-screen  bg-gradient-to-b from-[#ffffff] via-[#ffffff] to-[#fdfcfc]">
            <h1 className=" vsm:max-sm:flex vsm:max-sm:justify-center vsm:max-sm:mx-[2rem]  vsm:max-sm:flex-wrap flex justify-center mt-20 text-5xl font-black">Our Superior Services</h1>
            <div className=" vsm:max-sm:flex-col vsm:max-sm:items-center vsm:max-sm:mx-6 flex xl:mx-16 gap-20 overflow-x-auto min-w-[220px] custom-scrollbar overflow-y-hidden">
                <div className="flex flex-col rounded-2xl relative">
                    <Link href={'/services/Tailors'}>
                        <img src="/comp1.jpg" className=" object-cover mt-14 hover:cursor-pointer relative min-w-[250px] h-[310px] grayscale-[10%] border  drop-shadow-xl rounded-2xl" />
                    </Link>
                    <h1 className=" absolute z-10 text-black mx-[4rem] mt-[20rem] text-4xl font-bold">Tailor</h1>
                </div>
                <div className="  flex flex-col rounded-2xl hover:cursor-pointer relative">
                    <Link href={'/card'}>
                        <img src="/house.jpeg" className=" mt-14 min-w-[250px] h-[310px] grayscale-[10%] border border-gray drop-shadow-xl border-1  rounded-2xl" /></Link>
                    <h1 className=" absolute z-10 text-black mx-[3rem] mt-[20rem] text-4xl font-bold">Cleaning</h1>
                </div>
                <div className="  flex flex-col   rounded-2xl hover:cursor-pointer relative">
                    <Link href={'/card'}>
                        <img src="/ref.png" className=" object-cover mt-14 min-w-[250px] h-[310px] grayscale-[10%] border  drop-shadow-xl rounded-2xl" /></Link>
                    <h1 className=" absolute z-10 text-black mx-[4rem] mt-[20rem] text-4xl font-bold">Service</h1>
                </div>
                <div className="  flex flex-col   rounded-2xl hover:cursor-pointer relative">
                    <Link href={'/card'}>
                        <img src="/plumber.png" className=" mt-14 min-w-[250px] h-[310px] grayscale-[10%] border border-gray drop-shadow-xl border-1  rounded-2xl" /></Link>
                    <h1 className=" absolute z-10 text-black mx-[3rem] mt-[20rem] text-4xl font-bold">Plumber</h1>
                </div>
                <div className="  flex flex-col rounded-2xl hover:cursor-pointer relative">
                    <Link href={'/card'}>
                        <img src="/images/carp.png" className=" shadow-inner shadow-black bg-contain mt-[3.7rem] min-w-[250px] h-[310px] grayscale-[10%] border border-gray drop-shadow-xl border-1  rounded-2xl" /></Link>
                    <h1 className=" absolute z-10 text-black mx-[3rem] mt-[20rem] text-4xl font-bold overflow-hidden">Carpenter</h1>
                </div>
                <div className="  flex flex-col rounded-2xl hover:cursor-pointer relative">
                    <Link href={'/card'}>
                        <img src="/images/bath.jpeg" className=" shadow-inner shadow-black bg-contain mt-[3.7rem] min-w-[250px] h-[310px] grayscale-[10%] border border-gray drop-shadow-xl border-1 border-black rounded-2xl" /></Link>
                    <h1 className="   absolute z-10 text-black mx-[1rem] font-bold mt-[18rem] text-4xl">Explore More</h1>
                </div>
            </div>
        </div>
    )
}