import Balance from "./components/Balance";
import Form from './components/Form';
import TransactionLog from './components/TransactionLog';
import { BsSortNumericDownAlt, BsSortNumericUpAlt, BsSortDownAlt, BsSortUpAlt } from 'react-icons/bs'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { sortPriceHighToLow, sortPriceLowToHigh, sortDateHighToLow, sortDateLowToHigh } from "./store/transactionSlice";

export default function App() {
    
    const [sortPrice, setSortPrice] = useState('high')
    const [sortDate, setSortDate] = useState('high')

    const dispatch = useDispatch();

    const togglePriceSort = () => {
        if (sortPrice === 'high') {
            setSortPrice('low')
            dispatch(sortPriceLowToHigh())
        }
        else if (sortPrice === 'low') {
            setSortPrice('high')
            dispatch(sortPriceHighToLow())
        }
    }

    const toggleDateSort = () => {
        if (sortDate === 'high') {
            setSortDate('low')
            dispatch(sortDateLowToHigh())
        }
        else if (sortDate === 'low') {
            setSortDate('high')
            dispatch(sortDateHighToLow())
        }
    }

    return (
    <div className="grid place-content-center bg-[#e0f2fe] min-h-screen py-10" data-cy="main-app">
        <div className="flex flex-col sm:flex-col md:w-[30rem]">
            <div>
                <Balance />
                <Form />
            </div>
            <div className="w-full mb-1 pl-3 py-2 flex justify-between">
                <div className="w-fit text-xl font-mono font-semibold underline text-metal">Recent Transactions</div>
                <div className="inline-flex">

                    {sortPrice === 'high' ? 
                        <BsSortNumericDownAlt data-tooltip-target="tooltip-default" className="text-3xl text-metal mx-1" onClick={togglePriceSort}/> : 
                        <BsSortNumericUpAlt className="text-3xl text-metal mx-1" onClick={togglePriceSort}/>
                    }
                    {sortDate === 'high' ? 
                        <BsSortDownAlt className="text-3xl text-metal mx-1" onClick={toggleDateSort}/> :
                        <BsSortUpAlt className="text-3xl text-metal mx-1" onClick={toggleDateSort}/>
                    }
                </div>
            </div>
            <TransactionLog />
        </div>
    </div>
  );
}