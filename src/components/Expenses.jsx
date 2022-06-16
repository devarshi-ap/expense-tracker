import { MdFoodBank } from 'react-icons/md'

export default function Expenses() {
    return (
        <>
            <div className="m-2 p-4 h-[7rem] max-w-lg bg-[#2b3545] rounded-lg shadow-md hover:scale-105 transition duration-700 grid grid-cols-5 gap-4">
                <div className="my-auto block bg-[#334155] rounded-sm m-auto">
                    <MdFoodBank className='text-white text-6xl' />
                </div>

                <div className="p-1 col-span-4 bg-[#334155] rounded-sm flex flex-col justify-evenly">
                    <div className="flex justify-between">
                        <h1 className="w-fit text-md tracking-wider font-bold text-white my-auto">Spotify Monthly Fee</h1>
                        {/* <h2 className="w-fit text-md font-bold text-[#6ee7b7] my-auto ml-1">+30$</h2> */}
                        <h2 className="w-fit text-md font-bold text-[#f43f5e] my-auto ml-1">+30$</h2>
                    </div>

                    <div className="flex justify-between">
                        <p className="w-fit text-sm text-[#cbd5e1] my-auto">Category</p>
                        <p className="w-fit text-sm text-[#cbd5e1] my-auto">Oct 31, 2016</p>
                    </div>
                </div>
            </div>
        </>
    )
}