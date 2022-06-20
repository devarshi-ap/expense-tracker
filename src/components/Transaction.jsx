import { MdFoodBank } from 'react-icons/md'
import { HiOutlineTrash, HiOutlineCubeTransparent, HiOutlineShoppingBag, HiOutlineReceiptTax } from 'react-icons/hi'
import { RiBillLine, RiMentalHealthLine } from 'react-icons/ri'
import { FaChild, FaDonate, FaMoneyBillWave, FaBriefcaseMedical } from 'react-icons/fa'
import { GiPayMoney } from 'react-icons/gi'
import { TbSchool } from 'react-icons/tb'
import { MdOutlineFoodBank, MdOutlineSavings, MdEmojiTransportation } from 'react-icons/md'
import { IoFitnessOutline } from 'react-icons/io5'
import { BsHouse, BsEmojiSmile } from 'react-icons/bs'
import { VscSymbolField } from 'react-icons/vsc'

import { useDispatch } from "react-redux";
import { deleteTransaction } from '../store/transactionSlice'

import { toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Transaction(props) {
    
    const { name, category, type, date, amount, myKey } = props

    const categories = {
        'Bills & Utilities': <RiBillLine />,
        'Childcare': <FaChild />,
        'Debt': <GiPayMoney />,
        'Education': <TbSchool />,
        'Food & Dining': <MdOutlineFoodBank />,
        'Giving': <FaDonate />,
        'Health & Fitness': <IoFitnessOutline />,
        'Housing': <BsHouse />,
        'Income': <FaMoneyBillWave />,
        'Medical': <FaBriefcaseMedical />,
        'Other': <VscSymbolField />,
        'Personal Care': <RiMentalHealthLine />,
        'Rec. & Entertainment': <BsEmojiSmile />,
        'Savings': <MdOutlineSavings />,
        'Shopping': <HiOutlineShoppingBag />,
        'Taxes': <HiOutlineReceiptTax />,
        'Transportation': <MdEmojiTransportation />,
    };

    let expenseRed = <h2 className="w-fit text-md font-bold text-[#f43f5e] my-auto ml-1">-{amount}$</h2>,
        depositGreen =  <h2 className="w-fit text-md font-bold text-[#6ee7b7] my-auto ml-1">+{amount}$</h2>

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteTransaction(myKey))

        toast.success('Successfully Removed!', {
            position: "bottom-right",
            transition: Flip,
            theme:'dark',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    return (
        <div className='inline-flex'>
            <div className="m-2 p-4 h-[7rem] max-w-lg bg-[#2b3545] rounded-lg shadow-md hover:scale-105 transition duration-700 grid grid-cols-6 gap-4">
                
                {/* ICON */}
                <div className="my-auto block bg-[#334155] rounded-sm m-auto first:text-white first:text-6xl">
                    {categories[category]}
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
                <button aria-label="Delete" type="button" onClick={handleDelete} data-cy="delete">
                    <HiOutlineTrash className="text-xl"/>
                </button>
            </div>
        </div>
    )
}