import Balance from "./components/Balance";
import Form from './components/Form';
import TransactionLog from './components/TransactionLog';
import { BsSortNumericDown, BsSortNumericUp, BsSortDownAlt, BsSortUpAlt, BsSortAlphaDown, BsSortAlphaUp } from 'react-icons/bs'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { sortPriceHighToLow, sortPriceLowToHigh, sortDateHighToLow, sortDateLowToHigh, sortCategoryHighToLow, sortCategoryLowToHigh } from "./store/transactionSlice";

export default function App() {
    
    const [sortPrice, setSortPrice] = useState('low')
    const [sortDate, setSortDate] = useState('high')
    const [sortCategory, setSortCategory] = useState('high')

    const dispatch = useDispatch();

    const togglePriceSort = () => {
        if (sortPrice === 'high') {
            setSortPrice('low')
            dispatch(sortPriceHighToLow())
        }
        else if (sortPrice === 'low') {
            setSortPrice('high')
            dispatch(sortPriceLowToHigh())
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

    const toggleCategorySort = () => {
        if (sortCategory === 'high') {
            setSortCategory('low')
            dispatch(sortCategoryLowToHigh())
        }
        else if (sortCategory === 'low') {
            setSortCategory('high')
            dispatch(sortCategoryHighToLow())
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
                        <BsSortNumericUp className="text-3xl text-metal mx-1" onClick={togglePriceSort} title="sort-by-price"/> :
                        <BsSortNumericDown data-tooltip-target="tooltip-default" className="text-3xl text-metal mx-1" onClick={togglePriceSort} title="sort-by-price"/>
                    }
                    {sortDate === 'high' ? 
                        <BsSortDownAlt className="text-3xl text-metal mx-1" onClick={toggleDateSort} title="sort-by-date"/> :
                        <BsSortUpAlt className="text-3xl text-metal mx-1" onClick={toggleDateSort} title="sort-by-date"/>
                    }
                    {sortCategory === 'high' ? 
                        <BsSortAlphaDown className="text-3xl text-metal mx-1" onClick={toggleCategorySort} title="sort-by-category"/> :
                        <BsSortAlphaUp className="text-3xl text-metal mx-1" onClick={toggleCategorySort} title="sort-by-category"/>
                    }
                </div>
            </div>
            <TransactionLog />
        </div>
    </div>
  );
}