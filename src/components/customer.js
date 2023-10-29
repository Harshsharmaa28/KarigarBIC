 import Footer from "./footer"
 export default function Customer(){
    return(
        <div className=" h-screen flex flex-col justify-between">
            <h1 className=" mt-20 font-extrabold text-5xl text-center">Customer Care</h1>
            <div className="vsm:max-md:flex vsm:max-md:flex-col vsm:max-md:gap-10 vsm:max-md:flex-wrap vsm:max-md:items-center  flex items-center justify-center gap-20 hover:cursor-pointer">
                <img src="/cust.png" className="vsm:max-md:w-[240px] vsm:max-md:h-[240px] mt-12 xl:w-[20rem] xl:h-[20rem]"/>
                <img src="/cs.png" className="vsm:max-md:w-[240px] vsm:max-md:h-[240px] xl:w-[25rem] xl:h-[25rem]"/>
            </div>
            <Footer></Footer>
        </div>
    )
 }