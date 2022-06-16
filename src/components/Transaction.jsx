import { MdFoodBank } from 'react-icons/md'
import { HiOutlineTrash } from 'react-icons/hi'

export default function Transaction(props) {
    
    const { name, category, type, date, amount } = props

    let expenseRed = <h2 className="w-fit text-md font-bold text-[#f43f5e] my-auto ml-1">-{amount}$</h2>,
        depositGreen =  <h2 className="w-fit text-md font-bold text-[#6ee7b7] my-auto ml-1">+{amount}$</h2>

    return (
        <div className='inline-flex'>
            <div className="m-2 p-4 h-[7rem] max-w-lg bg-[#2b3545] rounded-lg shadow-md hover:scale-105 transition duration-700 grid grid-cols-6 gap-4">
                
                {/* ICON */}
                <div className="my-auto block bg-[#334155] rounded-sm m-auto">
                    <MdFoodBank className='text-white text-6xl' />
                </div>

                <div className="p-1 col-span-5 bg-[#334155] rounded-sm flex flex-col justify-evenly">

                    {/* TOP ROW TEXT */}
                    <div className="flex justify-between">
                        <h1 className="w-fit text-md tracking-wider font-bold text-white my-auto">{name}</h1>
                        {type === "Expense" ? expenseRed : depositGreen}
                    </div>

                    {/* BOTTOM ROW TEXT */}
                    <div className="flex justify-between">
                        <p className="w-fit text-sm text-[#cbd5e1] my-auto">{category}</p>
                        <p className="w-fit text-sm text-[#cbd5e1] my-auto">{date}</p>
                    </div>
                </div>
            </div>

            {/* DELETE BIN ICON */}
            <div className="my-auto">
                <button aria-label="Delete" type="button">
                    <HiOutlineTrash className="text-xl"/>
                </button>
            </div>
        </div>
    )
}