import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTransaction, expense, deposit } from "../store/transactionSlice";
import { nanoid } from 'nanoid'

import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Form() {

    /*
    name
    category
    type
    date
    amount
    */

    let dateObj = new Date(),
        todaysDate = `${dateObj.getFullYear()}-${dateObj.getMonth() + 1}-${dateObj.getDate()}`;

    const [name, setName] = useState('');
    const [category, setCategory] = useState('Bills & Utilities');
    const [type, setType] = useState('Expense');
    const [date, setDate] = useState(todaysDate);
    const [amount, setAmount] = useState(0);

    // instantiate dispatcher
    const dispatch = useDispatch();
    
    // https://mint.intuit.com/mint-categories/
    const categories = [
        'Bills & Utilities',
        'Childcare',
        'Debt',
        'Education',
        'Food & Dining',
        'Giving',
        'Health & Fitness',
        'Housing',
        'Income',
        'Medical',
        'Other',
        'Personal Care',
        'Rec. & Entertainment',
        'Savings',
        'Shopping',
        'Taxes',
        'Transportation',
    ];

    const categoryOptions = categories.map((category, index) => (
        <option key={index} value={category}>{category}</option>
    ))

    const handleSubmit = e => {
        e.preventDefault();

        // Dispatch Action
        dispatch(addTransaction({
            transactionName: name,
            transactionCategory: category,
            transactionType: type,
            transactionDate: date,
            transactionAmount: amount,
            transactionId: nanoid(),
        }))

        const notificationConfig = {
            position: "bottom-right",
            transition: Flip,
            theme:'dark',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        }

        if (type === "Expense") {
            dispatch(expense(amount))

            // notification
            toast.success('Expense Added!', notificationConfig);
        }
        else if (type === "Deposit") {
            dispatch(deposit(amount))

            // notification
            toast.success('Deposit Added!', notificationConfig);
        }

        // Refresh State
        // setName('');
        // setCategory('Bills & Utilities');
        // setType('Expense');
        // setDate(todaysDate)
        // setAmount(0);
    }

    return (
        <div className="m-2 block p-7 max-w-lg bg-[#f1f5f9] rounded-lg border border-gray-200 shadow-md dark:border-gray-700 dark:hover:bg-gray-700">
            <form onSubmit={handleSubmit}>
                <input
                    className="w-full h-9 mb-1 rounded-sm text-center"
                    type="text" 
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Transaction Name"
                    required
                    data-cy="txn-name"
                ></input>

                <select
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                    name="type"
                    className="w-full my-2 h-9 rounded-sm"
                    data-cy="txn-category"
                >{categoryOptions}</select>

                <div className="flex justify-between mt-1 mb-3">
                    <select value={type} onChange={e => setType(e.target.value)} name="type" className="w-4/12" data-cy="txn-type">
                        <option value="Expense">Expense</option>
                        <option value="Deposit">Deposit</option>
                    </select>

                    <input
                        className="w-7/12 h-9 rounded-sm text-center"
                        type="number" 
                        value={amount}
                        onChange={e => setAmount(e.target.value)}
                        placeholder="Amount ($)"
                        data-cy="txn-amount"
                        required
                    ></input>
                </div>

                <div className="mt-2 mb-5">
                    <input
                        className="w-full h-9 rounded-sm text-center"
                        type="date"
                        value={date}
                        onChange={e => setDate(e.target.value)}
                        data-cy="txn-date"
                    ></input>
                </div>
                
                <button
                    className="w-full bg-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-sm hover:scale-105 transition duration-700"
                    type="submit"
                    data-cy="txn-submit"
                >+ Add Transaction</button>
            </form>

            <ToastContainer
                position="bottom-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    )
}