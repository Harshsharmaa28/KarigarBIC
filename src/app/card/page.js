import Navbar from '@/components/topnavbar';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Star, ChevronDown } from 'lucide-react'
import Link from 'next/link'
export default function Card() {
    return (
        <div className=' '>
            <Navbar>p</Navbar>
            <div className="flex flex-wrap gap-10 justify-center items-center mt-5">
                <div>
                    <div className="w-[300px] rounded-md border border-black bg-white">
                        <Link href={'/account'}>
                        <img
                            src="/comp1.jpg"
                            alt="Laptop"
                            className="h-[200px] w-full rounded-md object-cover"
                        /></Link>
                        <div className="p-4 ">
                            <h1 className="text-lg font-semibold">Tailor</h1>
                            <p className="mt-3 text-sm text-gray-600">
                                Having more than 3 years of experience and have stiched more than 5000 orders.
                            </p>
                            <div className="my-4 flex items-center">
                                <span className="flex items-center space-x-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                                    ))}
                                    <span className="ml-3 inline-block text-xs font-semibold">50 Reviews</span>
                                </span>
                            </div>
                            <h1 className=' font-bold'>Pricing - <CurrencyRupeeIcon className='h-[1.25rem] mb-1'></CurrencyRupeeIcon>400</h1>
                            <button
                                type="button"
                                className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="w-[300px] rounded-md border border-black bg-white">
                        <img
                            src="/ref.png"
                            alt="Laptop"
                            className="h-[200px] w-full rounded-md object-cover border"
                        />
                        <div className="p-4 ">
                            <h1 className="text-lg font-semibold">Refrigerator Repair</h1>
                            <p className="mt-3 text-sm text-gray-600">
                                Having more than 3 years of experience and have stiched more than 5000 orders.
                            </p>
                            <div className="my-4 flex items-center">
                                <span className="flex items-center space-x-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                                    ))}
                                    <span className="ml-3 inline-block text-xs font-semibold">22 Reviews</span>
                                </span>
                            </div>
                            <h1 className=' font-bold'>Pricing - <CurrencyRupeeIcon className='h-[1.25rem] mb-1'></CurrencyRupeeIcon>250</h1>
                            <button
                                type="button"
                                className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="w-[300px] rounded-md border border-black bg-white">
                        <img
                            src="/house.jpeg"
                            alt="Laptop"
                            className="h-[200px] w-full rounded-md object-cover"
                        />
                        <div className="p-4">
                            <h1 className="text-lg font-semibold">House Cleaning</h1>
                            <p className="mt-3 text-sm text-gray-600">
                                Having more than 3 years of experience and have stiched more than 5000 orders.
                            </p>
                            <div className="my-4 flex items-center">
                                <span className="flex items-center space-x-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                                    ))}
                                    <span className="ml-3 inline-block text-xs font-semibold">5 Reviews</span>
                                </span>
                            </div>
                            <h1 className=' font-bold'>Pricing - <CurrencyRupeeIcon className='h-[1.25rem] mb-1'></CurrencyRupeeIcon>200</h1>
                            <button
                                type="button"
                                className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="w-[300px] rounded-md border border-black bg-white">
                        <img
                            src="/images/carp.png"
                            alt="Laptop"
                            className="h-[200px] w-full rounded-md object-cover"
                        />
                        <div className="p-4">
                            <h1 className="text-lg font-semibold">Carpenter</h1>
                            <p className="mt-3 text-sm text-gray-600">
                                Having more than 3 years of experience and have stiched more than 5000 orders.
                            </p>
                            <div className="my-4 flex items-center">
                                <span className="flex items-center space-x-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                                    ))}
                                    <span className="ml-3 inline-block text-xs font-semibold">5 Reviews</span>
                                </span>
                            </div>
                            <h1 className=' font-bold'>Pricing - <CurrencyRupeeIcon className='h-[1.25rem] mb-1'></CurrencyRupeeIcon>200</h1>
                            <button
                                type="button"
                                className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="w-[300px] rounded-md border border-black bg-white">
                        <img
                            src="/images/bath.jpeg  "
                            alt="Laptop"
                            className="h-[200px] w-full rounded-md object-cover"
                        />
                        <div className="p-4">
                            <h1 className="text-lg font-semibold">Bathroom Cleaning</h1>
                            <p className="mt-3 text-sm text-gray-600">
                                Having more than 3 years of experience and have stiched more than 5000 orders.
                            </p>
                            <div className="my-4 flex items-center">
                                <span className="flex items-center space-x-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                                    ))}
                                    <span className="ml-3 inline-block text-xs font-semibold">5 Reviews</span>
                                </span>
                            </div>
                            <h1 className=' font-bold'>Pricing - <CurrencyRupeeIcon className='h-[1.25rem] mb-1'></CurrencyRupeeIcon>200</h1>
                            <button
                                type="button"
                                className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="w-[300px] rounded-md border border-black bg-white">
                        <img
                            src="/fanr.jpeg"
                            alt="Laptop"
                            className="h-[200px] w-full rounded-md object-cover"
                        />
                        <div className="p-4">
                            <h1 className="text-lg font-semibold">Fan Repairing</h1>
                            <p className="mt-3 text-sm text-gray-600">
                                Having more than 3 years of experience and have stiched more than 5000 orders.
                            </p>
                            <div className="my-4 flex items-center">
                                <span className="flex items-center space-x-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                                    ))}
                                    <span className="ml-3 inline-block text-xs font-semibold">5 Reviews</span>
                                </span>
                            </div>
                            <h1 className=' font-bold'>Pricing - <CurrencyRupeeIcon className='h-[1.25rem] mb-1'></CurrencyRupeeIcon>200</h1>
                            <button
                                type="button"
                                className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="w-[300px] rounded-md border border-black bg-white">
                        <img
                            src="/washm.jpg"
                            alt="Laptop"
                            className="h-[200px] w-full rounded-md object-cover"
                        />
                        <div className="p-4">
                            <h1 className="text-lg font-semibold">Washing Machine Repair</h1>
                            <p className="mt-3 text-sm text-gray-600">
                                Having more than 3 years of experience and have stiched more than 5000 orders.
                            </p>
                            <div className="my-4 flex items-center">
                                <span className="flex items-center space-x-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                                    ))}
                                    <span className="ml-3 inline-block text-xs font-semibold">5 Reviews</span>
                                </span>
                            </div>
                            <h1 className=' font-bold'>Pricing - <CurrencyRupeeIcon className='h-[1.25rem] mb-1'></CurrencyRupeeIcon>200</h1>
                            <button
                                type="button"
                                className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="w-[300px] rounded-md border border-black bg-white">
                        <img
                            src="/images/electrician.jpeg"
                            alt="Laptop"
                            className="h-[200px] w-full rounded-md object-cover"
                        />
                        <div className="p-4">
                            <h1 className="text-lg font-semibold">Electrician</h1>
                            <p className="mt-3 text-sm text-gray-600">
                                Having more than 3 years of experience and have stiched more than 5000 orders.
                            </p>
                            <div className="my-4 flex items-center">
                                <span className="flex items-center space-x-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                                    ))}
                                    <span className="ml-3 inline-block text-xs font-semibold">5 Reviews</span>
                                </span>
                            </div>
                            <h1 className=' font-bold'>Pricing - <CurrencyRupeeIcon className='h-[1.25rem] mb-1'></CurrencyRupeeIcon>200</h1>
                            <button
                                type="button"
                                className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="w-[300px] rounded-md border border-black bg-white">
                        <img
                            src="/images/plumberimg.png"
                            alt="Laptop"
                            className="h-[200px] w-full rounded-md object-cover"
                        />
                        <div className="p-4">
                            <h1 className="text-lg font-semibold">Plumber</h1>
                            <p className="mt-3 text-sm text-gray-600">
                                Having more than 3 years of experience and have stiched more than 5000 orders.
                            </p>
                            <div className="my-4 flex items-center">
                                <span className="flex items-center space-x-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                                    ))}
                                    <span className="ml-3 inline-block text-xs font-semibold">5 Reviews</span>
                                </span>
                            </div>
                            <h1 className=' font-bold'>Pricing - <CurrencyRupeeIcon className='h-[1.25rem] mb-1'></CurrencyRupeeIcon>200</h1>
                            <button
                                type="button"
                                className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="w-[300px] rounded-md border border-black bg-white">
                        <img
                            src="/images/painterimg.png"
                            alt="Laptop"
                            className="h-[200px] w-full rounded-md object-cover"
                        />
                        <div className="p-4">
                            <h1 className="text-lg font-semibold">Painter</h1>
                            <p className="mt-3 text-sm text-gray-600">
                                Having more than 3 years of experience and have stiched more than 5000 orders.
                            </p>
                            <div className="my-4 flex items-center">
                                <span className="flex items-center space-x-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                                    ))}
                                    <span className="ml-3 inline-block text-xs font-semibold">5 Reviews</span>
                                </span>
                            </div>
                            <h1 className=' font-bold'>Pricing - <CurrencyRupeeIcon className='h-[1.25rem] mb-1'></CurrencyRupeeIcon>200</h1>
                            <button
                                type="button"
                                className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="w-[300px] rounded-md border border-black bg-white">
                        <img
                            src="/images/cookimg.jpeg"
                            alt="Laptop"
                            className="h-[200px] w-full rounded-md object-cover"
                        />
                        <div className="p-4">
                            <h1 className="text-lg font-semibold">Cook</h1>
                            <p className="mt-3 text-sm text-gray-600">
                                Having more than 3 years of experience and have stiched more than 5000 orders.
                            </p>
                            <div className="my-4 flex items-center">
                                <span className="flex items-center space-x-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                                    ))}
                                    <span className="ml-3 inline-block text-xs font-semibold">5 Reviews</span>
                                </span>
                            </div>
                            <h1 className=' font-bold'>Pricing - <CurrencyRupeeIcon className='h-[1.25rem] mb-1'></CurrencyRupeeIcon>200</h1>
                            <button
                                type="button"
                                className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
                <div><div className="w-[300px] rounded-md border border-black bg-white">
                    <img
                        src="/pest.jpeg"
                        alt="Laptop"
                        className="h-[200px] w-full rounded-md object-cover"
                    />
                    <div className="p-4">
                        <h1 className="text-lg font-semibold">Pest Control</h1>
                        <p className="mt-3 text-sm text-gray-600">
                            Having more than 3 years of experience and have stiched more than 5000 orders.
                        </p>
                        <div className="my-4 flex items-center">
                            <span className="flex items-center space-x-1">
                                {[...Array(4)].map((_, i) => (
                                    <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                                ))}
                                <span className="ml-3 inline-block text-xs font-semibold">15 Reviews</span>
                            </span>
                        </div>
                        <h1 className=' font-bold'>Pricing - <CurrencyRupeeIcon className='h-[1.25rem] mb-1'></CurrencyRupeeIcon>150</h1>
                        <button
                            type="button"
                            className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                            Book Now
                        </button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}