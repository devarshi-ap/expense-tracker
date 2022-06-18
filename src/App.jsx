import Balance from "./components/Balance";
import Form from './components/Form';
import TransactionLog from './components/TransactionLog';
import { BsSortNumericDownAlt, BsSortNumericUpAlt } from 'react-icons/bs'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { sortPriceHighToLow, sortPriceLowToHigh } from "./store/transactionSlice";

export default function App() {
    
    const [sortPrice, setSortPrice] = useState('high')

    const dispatch = useDispatch();

    const toggleSort = () => {
        if (sortPrice === 'high') {
            setSortPrice('low')
            dispatch(sortPriceLowToHigh())
        }
        else if (sortPrice === 'low') {
            setSortPrice('high')
            dispatch(sortPriceHighToLow())
        }
    }

    return (
    <div className="grid place-content-center bg-[#e0f2fe] min-h-screen py-10">
        <div className="flex flex-col sm:flex-col md:w-[30rem]">
            <div>
                <Balance />
                <Form />
            </div>
            <div className="w-full mb-1 pl-3 py-2 flex justify-between">
                <div className="w-fit text-xl font-mono font-semibold underline text-metal">Recent Transactions</div>
                <div>
                    {sortPrice === 'high' ? 
                        <BsSortNumericDownAlt className="text-3xl text-metal" onClick={toggleSort}/> :
                        <BsSortNumericUpAlt className="text-3xl text-metal" onClick={toggleSort}/>
                    }
                </div>
            </div>
            <TransactionLog />
        </div>
    </div>
  );
}